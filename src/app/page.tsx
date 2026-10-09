import Link from "next/link";
import { CategoryGrid } from "@/components/category-grid";
import { HomeStats } from "@/components/home-stats";
import { categories } from "@/lib/categories";
import { questions } from "@/lib/questions";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <section className="mb-10 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Desmos SAT Prep
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Master every SAT Math question Desmos can solve for you.
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {categories.length} categories, {questions.length} practice questions, and a live
          Desmos calculator built into every single one. Learn the exact clicks and syntax that
          turn a hard algebra problem into a 10-second graph.
        </p>
        <div className="mt-6 flex gap-3">
          <Link
            href={`/category/${categories[0].slug}`}
            className="inline-flex h-11 items-center rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Start practicing
          </Link>
          <Link
            href="/reference"
            className="inline-flex h-11 items-center rounded-lg border px-5 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary hover:bg-accent"
          >
            Desmos cheat sheet
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <HomeStats />
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Question categories</h2>
        <CategoryGrid categories={categories} />
      </section>
    </div>
  );
}
