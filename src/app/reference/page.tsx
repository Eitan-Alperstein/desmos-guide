import { Card, CardContent } from "@/components/ui/card";

interface Section {
  title: string;
  description: string;
  tips: string[];
}

const sections: Section[] = [
  {
    title: "Typing math",
    description:
      "Desmos accepts math notation almost exactly as you'd write it by hand — no special syntax to memorize for the basics.",
    tips: [
      "^ for exponents: x^2",
      "sqrt(...) for square roots, or type \\sqrt and press tab",
      "abs(...) or the | | keys for absolute value",
      "π is typed as 'pi'; it auto-converts to the symbol",
      "Fractions: typing / automatically creates a stacked fraction",
    ],
  },
  {
    title: "Solving equations & systems",
    description:
      "The single biggest Desmos trick for the SAT: graph both sides and click where they meet.",
    tips: [
      "Graph each side of an equation as its own line: y = left side, y = right side",
      "Click directly on the intersection point — Desmos snaps to and labels the exact coordinates",
      "Works for linear, quadratic, absolute value, exponential, and radical equations alike",
      "If a line and curve are tangent (touch once), that's your 'exactly one solution' case",
    ],
  },
  {
    title: "Finding roots / zeros",
    description: "Reading x-intercepts replaces factoring, the quadratic formula, or synthetic division.",
    tips: [
      "Graph the polynomial as given — no need to set it equal to zero first",
      "Click near each x-intercept; Desmos snaps to the exact root and shows (x, 0)",
      "Each root r corresponds to a factor (x − r)",
    ],
  },
  {
    title: "Sliders",
    description: "Turn an unknown constant into something you can drag and visually solve for.",
    tips: [
      "Type an expression with an undefined letter, e.g. y = a*x^2 + 3",
      "Click the letter in the expression list, then 'add slider'",
      "Drag the slider until the graph matches the condition in the problem (passes through a point, has a given root, etc.)",
      "Adjust the slider's min/max/step from the small gear icon next to it for finer control",
    ],
  },
  {
    title: "Tables",
    description: "Evaluate a function at specific inputs, or hold a small data set, without a separate calculator.",
    tips: [
      "Click '+' → 'table' to add one",
      "Define your function first (f(x) = ...), then type x-values into the table's first column",
      "The table's second column automatically fills in f(x) for each input",
    ],
  },
  {
    title: "Regression (line / curve of best fit)",
    description: "Fit a model to a table of data using a tilde (~) instead of an equals sign.",
    tips: [
      "Linear: y1 ~ m*x1 + b",
      "Quadratic: y1 ~ a*x1^2 + b*x1 + c",
      "Exponential: y1 ~ a*b^x1",
      "The solved parameter values (m, b, a, c, ...) appear listed right below the regression expression",
    ],
  },
  {
    title: "Inequalities & shading",
    description: "See an entire solution region at once instead of testing points one by one.",
    tips: [
      "Replace = with >, <, >=, or <= to get automatic shading",
      "Graph two inequalities in the same calculator to see the overlapping region of a system",
      "Plot a candidate point as an ordered pair, e.g. (2, 5), to check if it falls in the shaded region",
    ],
  },
  {
    title: "Distance & midpoint",
    description: "Built-in functions mean you never need to recall the distance or midpoint formulas.",
    tips: [
      "distance((x1,y1),(x2,y2)) returns the exact distance",
      "midpoint((x1,y1),(x2,y2)) returns the exact midpoint",
    ],
  },
  {
    title: "Circles & conics",
    description: "Center-radius form graphs directly — Desmos handles implicit equations natively.",
    tips: [
      "Type (x-h)^2+(y-k)^2=r^2 exactly as given",
      "Plot a point to check visually whether it's inside, on, or outside the circle",
    ],
  },
  {
    title: "Trig mode",
    description: "Degrees vs. radians is the #1 silent killer on trig problems — always check the mode first.",
    tips: [
      "Click the wrench/settings icon in the top-right of the graph to toggle Degrees ↔ Radians",
      "Trace along a sine/cosine curve to read amplitude (max height) and period (distance between peaks)",
    ],
  },
  {
    title: "Backsolving answer choices",
    description: "When algebra gets messy, let Desmos test the answer choices for you.",
    tips: [
      "Graph the left-hand side and right-hand side of an equation as two separate functions and find their intersection",
      "Watch for extraneous solutions on radical/absolute-value equations — always verify by substituting back in",
    ],
  },
];

export default function ReferencePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        Reference
      </p>
      <h1 className="text-3xl font-semibold tracking-tight">Desmos Cheat Sheet</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Every general-purpose Desmos trick used across the practice categories, in one place.
        Skim this before a timed practice set.
      </p>

      <div className="mt-8 grid gap-4">
        {sections.map((section) => (
          <Card key={section.title}>
            <CardContent className="pt-6">
              <h2 className="text-lg font-semibold tracking-tight">{section.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{section.description}</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm">
                {section.tips.map((tip, i) => (
                  <li key={i}>
                    <code className="rounded bg-muted px-1 py-0.5 text-xs">{tip}</code>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
