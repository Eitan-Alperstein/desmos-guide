"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DesmosCalculator } from "@/components/desmos-calculator";
import { DifficultyBadge } from "@/components/difficulty-badge";
import { checkGridInAnswer } from "@/lib/check-answer";
import { useProgress } from "@/lib/progress";
import { Category, Question } from "@/lib/types";

interface PracticeClientProps {
  category: Category;
  question: Question;
  categoryQuestions: Question[];
}

type Status = "unanswered" | "correct" | "incorrect";

export function PracticeClient({ category, question, categoryQuestions }: PracticeClientProps) {
  const router = useRouter();
  const { recordAttempt, isSolved } = useProgress();

  const [status, setStatus] = useState<Status>("unanswered");
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [gridInput, setGridInput] = useState("");
  const [hintIndex, setHintIndex] = useState(0);
  const [showSolution, setShowSolution] = useState(false);

  const currentIndex = useMemo(
    () => categoryQuestions.findIndex((q) => q.id === question.id),
    [categoryQuestions, question.id],
  );
  const nextQuestion = categoryQuestions[currentIndex + 1];
  const prevQuestion = categoryQuestions[currentIndex - 1];

  function resetQuestionState() {
    setStatus("unanswered");
    setSelectedChoice(null);
    setGridInput("");
    setHintIndex(0);
    setShowSolution(false);
  }

  function handleChoice(choice: string) {
    if (status === "correct") return;
    setSelectedChoice(choice);
    const correct = choice === question.answer;
    setStatus(correct ? "correct" : "incorrect");
    recordAttempt(question.id, correct);
  }

  function handleGridSubmit() {
    if (status === "correct" || !gridInput.trim()) return;
    const correct = checkGridInAnswer(gridInput, question.answer);
    setStatus(correct ? "correct" : "incorrect");
    recordAttempt(question.id, correct);
  }

  function goTo(q: Question | undefined) {
    if (!q) {
      router.push(`/category/${category.slug}`);
      return;
    }
    resetQuestionState();
    router.push(`/practice/${category.slug}/${q.id}`);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <Link
            href={`/category/${category.slug}`}
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            ← {category.title}
          </Link>
          <p className="mt-1 text-xs text-muted-foreground">
            Question {currentIndex + 1} of {categoryQuestions.length}
            {isSolved(question.id) ? " · Solved" : ""}
          </p>
        </div>
        <DifficultyBadge difficulty={question.difficulty} />
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        {/* Left: question + answer controls */}
        <div className="flex flex-col gap-4">
          <Card>
            <CardContent className="pt-6">
              <p className="whitespace-pre-line text-base leading-relaxed">{question.prompt}</p>
            </CardContent>
          </Card>

          {question.responseType === "mcq" && question.choices ? (
            <div className="grid gap-2">
              {question.choices.map((choice) => {
                const isSelected = selectedChoice === choice;
                const isCorrectChoice = choice === question.answer;
                const reveal = status !== "unanswered";
                return (
                  <button
                    key={choice}
                    onClick={() => handleChoice(choice)}
                    disabled={status === "correct"}
                    className={[
                      "rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors",
                      reveal && isCorrectChoice
                        ? "border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200"
                        : reveal && isSelected && !isCorrectChoice
                          ? "border-rose-500 bg-rose-50 text-rose-900 dark:bg-rose-950 dark:text-rose-200"
                          : "border-border hover:border-primary/50 hover:bg-accent/40",
                    ].join(" ")}
                  >
                    {choice}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="flex gap-2">
              <input
                value={gridInput}
                onChange={(e) => setGridInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleGridSubmit()}
                disabled={status === "correct"}
                placeholder="Type your answer"
                className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20"
              />
              <Button onClick={handleGridSubmit} disabled={status === "correct"}>
                Check
              </Button>
            </div>
          )}

          {status === "correct" && (
            <p className="rounded-lg bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200">
              Correct! Nice work.
            </p>
          )}
          {status === "incorrect" && (
            <p className="rounded-lg bg-rose-50 px-4 py-3 text-sm font-medium text-rose-900 dark:bg-rose-950 dark:text-rose-200">
              Not quite — try again, or grab a hint below.
            </p>
          )}

          <Separator />

          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setHintIndex((i) => Math.min(i + 1, question.hints.length))}
              disabled={hintIndex >= question.hints.length}
            >
              {hintIndex === 0 ? "Show a hint" : "Next hint"}
            </Button>
            <Button variant="outline" size="sm" onClick={() => setShowSolution((s) => !s)}>
              {showSolution ? "Hide solution" : "Show Desmos solution"}
            </Button>
          </div>

          {hintIndex > 0 && (
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {question.hints.slice(0, hintIndex).map((hint, i) => (
                <li key={i}>{hint}</li>
              ))}
            </ul>
          )}

          {showSolution && (
            <Card className="border border-primary/25 bg-accent/30">
              <CardContent className="pt-6">
                <p className="mb-2 text-sm font-semibold text-primary">How to solve it in Desmos</p>
                <ol className="list-decimal space-y-1.5 pl-5 text-sm text-muted-foreground">
                  {question.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          )}

          <div className="mt-2 flex items-center justify-between">
            <Button variant="ghost" onClick={() => goTo(prevQuestion)} disabled={!prevQuestion}>
              ← Previous
            </Button>
            <Button onClick={() => goTo(nextQuestion)}>
              {nextQuestion ? "Next question →" : "Back to category"}
            </Button>
          </div>
        </div>

        {/* Right: live Desmos calculator */}
        <div className="flex flex-col">
          <DesmosCalculator resetKey={question.id} className="h-[420px] w-full rounded-lg border lg:h-[560px]" />
          <p className="mt-2 text-xs text-muted-foreground">
            Live Desmos calculator — type the equations from the trick above and click points to
            read off coordinates.
          </p>
        </div>
      </div>
    </div>
  );
}
