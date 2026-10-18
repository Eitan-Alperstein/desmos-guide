# Desmos SAT Prep

A practice site that teaches you to solve SAT math problems with the built-in Desmos graphing calculator instead of by hand.

Each topic (systems of linear equations, quadratic roots, vertex/max-min, linear–quadratic systems, absolute value, and more) comes with:

- **The trick:** the Desmos move that replaces the algebra
- **Syntax tips:** exactly what to type
- **Practice questions** (100+ total) with an embedded Desmos calculator right next to each problem, so you practice the way you'll test

Progress is saved in your browser, and your accuracy earns a rank (Iron → Bronze → Silver → …). There's also a quick-reference page of the most useful Desmos syntax.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui · Desmos API

No backend: questions live in `src/lib/questions.ts` and progress is stored in `localStorage`.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project layout

```
src/app/                       routes: home, /category/[slug], /practice/[slug]/[questionId], /reference
src/components/                calculator embed, practice UI, category grid, stats
src/lib/categories.ts          topics, tricks and syntax tips
src/lib/questions.ts           practice questions
src/lib/progress.ts, rank.ts   local progress tracking and rank tiers
```
