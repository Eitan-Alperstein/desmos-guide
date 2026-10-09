"use client";

import { useMemo } from "react";
import { Progress } from "@/components/ui/progress";
import { questions } from "@/lib/questions";
import { useProgress } from "@/lib/progress";
import { getNextRank, getRank } from "@/lib/rank";

export function HomeStats() {
  const { state, hydrated, resetAll } = useProgress();

  const { solvedCount, totalCount, percent } = useMemo(() => {
    const total = questions.length;
    const solved = questions.filter((q) => (state[q.id] ?? []).some((a) => a.correct)).length;
    return {
      solvedCount: solved,
      totalCount: total,
      percent: total === 0 ? 0 : Math.round((solved / total) * 100),
    };
  }, [state]);

  const rank = getRank(percent);
  const nextRank = getNextRank(percent);

  if (!hydrated) {
    return <div className="h-24 w-full animate-pulse rounded-lg bg-muted" />;
  }

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex items-center gap-4">
          <span
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-bold"
            style={{ backgroundColor: rank.color, color: rank.textColor }}
          >
            {rank.name[0]}
          </span>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Your rank</p>
            <p className="text-2xl font-semibold tracking-tight">{rank.name}</p>
            <p className="text-sm text-muted-foreground">{rank.description}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-muted-foreground">
            {solvedCount} / {totalCount} solved
          </p>
          {nextRank ? (
            <p className="text-xs text-muted-foreground">
              {nextRank.minPercent - percent}% more to reach {nextRank.name}
            </p>
          ) : (
            <p className="text-xs text-muted-foreground">Max rank reached</p>
          )}
        </div>
      </div>
      <Progress value={percent} className="mt-4 h-2" />
      <div className="mt-3 flex justify-end">
        <button
          onClick={() => {
            if (window.confirm("Reset all progress? This cannot be undone.")) {
              resetAll();
            }
          }}
          className="text-xs text-muted-foreground underline-offset-2 hover:underline"
        >
          Reset progress
        </button>
      </div>
    </div>
  );
}
