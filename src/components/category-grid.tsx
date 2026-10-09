"use client";

import Link from "next/link";
import { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Category } from "@/lib/types";
import { getQuestionsByCategory } from "@/lib/questions";
import { useProgress } from "@/lib/progress";

export function CategoryGrid({ categories }: { categories: Category[] }) {
  const { state, hydrated } = useProgress();

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <CategoryCardInner key={category.slug} category={category} state={state} hydrated={hydrated} />
      ))}
    </div>
  );
}

function CategoryCardInner({
  category,
  state,
  hydrated,
}: {
  category: Category;
  state: Record<string, { correct: boolean }[]>;
  hydrated: boolean;
}) {
  const categoryQuestions = useMemo(() => getQuestionsByCategory(category.slug), [category.slug]);

  const solved = categoryQuestions.filter((q) => (state[q.id] ?? []).some((a) => a.correct)).length;
  const total = categoryQuestions.length;
  const percent = total === 0 ? 0 : Math.round((solved / total) * 100);

  return (
    <Link href={`/category/${category.slug}`} className="group">
      <Card className="h-full transition-colors group-hover:ring-primary/40">
        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-base leading-snug">{category.title}</CardTitle>
            {hydrated && percent === 100 && (
              <span className="shrink-0 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                Mastered
              </span>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{category.shortDescription}</p>
          <div className="mt-4 flex items-center gap-2">
            <Progress value={hydrated ? percent : 0} className="h-1.5" />
            <span className="shrink-0 text-xs text-muted-foreground">
              {hydrated ? `${solved}/${total}` : "…"}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
