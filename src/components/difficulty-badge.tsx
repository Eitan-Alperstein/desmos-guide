import { Badge } from "@/components/ui/badge";
import { Difficulty } from "@/lib/types";
import { cn } from "@/lib/utils";

const styles: Record<Difficulty, string> = {
  easy: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-300",
  medium: "bg-amber-100 text-amber-800 hover:bg-amber-100 dark:bg-amber-950 dark:text-amber-300",
  hard: "bg-rose-100 text-rose-800 hover:bg-rose-100 dark:bg-rose-950 dark:text-rose-300",
};

const labels: Record<Difficulty, string> = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

export function DifficultyBadge({ difficulty, className }: { difficulty: Difficulty; className?: string }) {
  return (
    <Badge className={cn(styles[difficulty], "border-0 font-medium", className)}>
      {labels[difficulty]}
    </Badge>
  );
}
