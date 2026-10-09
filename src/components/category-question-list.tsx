"use client";

import Link from "next/link";
import { DifficultyBadge } from "@/components/difficulty-badge";
import { useProgress } from "@/lib/progress";
import { Question } from "@/lib/types";

export function CategoryQuestionList({
  categorySlug,
  questions,
}: {
  categorySlug: string;
  questions: Question[];
}) {
  const { isSolved, hydrated } = useProgress();

  return (
    <div className="grid gap-2">
      {questions.map((question, i) => (
        <Link
          key={question.id}
          href={`/practice/${categorySlug}/${question.id}`}
          className="flex items-center justify-between gap-3 rounded-lg border px-4 py-3 transition-colors hover:border-foreground/30 hover:bg-muted/40"
        >
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">Q{i + 1}</span>
            <span className="text-sm font-medium">
              {question.prompt.split("\n")[0].slice(0, 70)}
              {question.prompt.length > 70 ? "…" : ""}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {hydrated && isSolved(question.id) && (
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                ✓ Solved
              </span>
            )}
            <DifficultyBadge difficulty={question.difficulty} />
          </div>
        </Link>
      ))}
    </div>
  );
}
