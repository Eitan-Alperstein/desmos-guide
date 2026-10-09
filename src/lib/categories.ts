import { Category } from "./types";

export const categories: Category[] = [
  {
    slug: "linear-systems",
    title: "Systems of Linear Equations",
    shortDescription: "Find where two lines cross instead of solving by substitution.",
    trick:
      "Type both equations exactly as written. Desmos draws both lines, and you can click directly on the crossing point to reveal its exact coordinates — no algebra required.",
    syntaxTips: [
      "Type each equation on its own line: y = 2x - 3",
      "Click the intersection point on the graph — Desmos labels it with exact (x, y) coordinates",
      "If the lines look parallel, zoom out (scroll to zoom) to confirm there's no intersection",
    ],
  },
  {
    slug: "quadratic-roots",
    title: "Quadratic Roots via Graphing",
    shortDescription: "Find zeros of a quadratic by reading the x-intercepts.",
    trick:
      "Graph the quadratic and click near where it crosses the x-axis. Desmos snaps to the exact root and labels it, confirming your factoring instantly.",
    syntaxTips: [
      "Type the quadratic directly: y = x^2 - 5x + 6",
      "Click near each x-intercept to snap to the exact root",
      "Use ^2 for squaring — Desmos accepts standard math notation",
    ],
  },
  {
    slug: "vertex-max-min",
    title: "Vertex Form & Max/Min",
    shortDescription: "Find the maximum or minimum of a quadratic without completing the square.",
    trick:
      "Graph the function and click on the highest or lowest point of the parabola. Desmos labels it as the exact vertex — perfect for projectile motion and revenue/profit problems.",
    syntaxTips: [
      "Type the model as given, e.g. y = -16x^2 + 64x + 5",
      "Click directly on the peak (or valley) of the curve to snap to the vertex",
      "Rename x and y to match the problem's variables if it helps you stay organized, e.g. h(t) = ...",
    ],
  },
  {
    slug: "linear-quadratic-system",
    title: "Linear–Quadratic Systems",
    shortDescription: "Find where a line meets a parabola — 0, 1, or 2 points.",
    trick:
      "Graph the line and the parabola together. Click each intersection point. If the line just grazes the curve (tangent), there's exactly one point — Desmos shows it clearly even when the algebra (discriminant = 0) is easy to miss.",
    syntaxTips: [
      "Graph both expressions on separate lines in the same calculator",
      "Click every visible intersection — don't assume there's only one",
      "If you see no crossing, zoom out before concluding there's no solution",
    ],
  },
  {
    slug: "absolute-value",
    title: "Absolute Value Equations & Inequalities",
    shortDescription: "Solve |expression| = something by graphing the V-shape.",
    trick:
      "Graph y = |expression| and y = the other side of the equation. The V-shaped graph crosses the line at one or two points — click them both, since absolute value equations often have two solutions.",
    syntaxTips: [
      "Type abs(...) or use the | | keys for absolute value",
      "Graph the right-hand side as its own line, e.g. y = 2x + 9",
      "Click every intersection point — a V-shaped graph often crosses a line twice",
    ],
  },
  {
    slug: "inequalities-shading",
    title: "Inequality Regions & Shading",
    shortDescription: "Visualize solution regions instead of testing points by hand.",
    trick:
      "Type an inequality using >, <, >=, or <= and Desmos automatically shades the entire solution region. Graph a second inequality to see the overlap for a system — any point in the double-shaded region satisfies both.",
    syntaxTips: [
      "Use >=, <=, >, < directly in place of = to get automatic shading",
      "Plot a test point as an ordered pair, e.g. (0,0), to see instantly whether it falls in the shaded region",
      "Stack multiple inequalities to see the overlapping solution region for a system",
    ],
  },
  {
    slug: "table-feature",
    title: "The Table Feature",
    shortDescription: "Evaluate a function at a specific input without substituting by hand.",
    trick:
      "Instead of plugging a value into a function algebraically, define the function in Desmos, open a table, type the input in the x-column, and read the output — Desmos does the arithmetic for you.",
    syntaxTips: [
      "Define the function first: f(x) = 3x^2 - 2x + 1",
      "Click the '+' button and choose 'table', then type your x-value in the first column",
      "The matching y-value appears automatically in the second column",
    ],
  },
  {
    slug: "regression",
    title: "Line & Curve of Best Fit",
    shortDescription: "Fit a model to data points instantly with regression syntax.",
    trick:
      "Enter data points into a table, then type a regression formula using a tilde (~) instead of an equals sign. Desmos solves for the best-fit parameters and even reports them as draggable values.",
    syntaxTips: [
      "Build a table with columns x1 and y1, then enter your data points",
      "Linear fit: y1 ~ m*x1 + b",
      "Quadratic fit: y1 ~ a*x1^2 + b*x1 + c",
      "Exponential fit: y1 ~ a*b^x1",
      "The solved values of m, b, a, c, etc. appear listed below the regression line",
    ],
  },
  {
    slug: "exponential",
    title: "Exponential Growth & Decay",
    shortDescription: "Evaluate or solve exponential models using tables and intersections.",
    trick:
      "Graph the exponential model, then use the table feature to read off its value at a specific time, or graph a horizontal line at a target value and find the intersection to solve for time.",
    syntaxTips: [
      "Type the model exactly: y = 500(1.08)^x",
      "Use the table to evaluate at a specific x without a calculator",
      "To solve for when the model hits a target value, graph y = (target) and click the intersection",
    ],
  },
  {
    slug: "polynomial-factoring",
    title: "Polynomial Roots & Factoring Check",
    shortDescription: "Verify a factoring attempt by checking x-intercepts.",
    trick:
      "Graph the original polynomial and click each x-intercept. Every root you find corresponds to a factor — a fast way to check your by-hand factoring or test which answer choice is actually a factor.",
    syntaxTips: [
      "Type the full polynomial: y = x^3 - 2x^2 - 5x + 6",
      "Click each x-intercept to reveal the exact root",
      "Each root r means (x - r) is a factor — match this against the answer choices",
    ],
  },
  {
    slug: "rational-asymptotes",
    title: "Rational Functions & Asymptotes",
    shortDescription: "Read vertical and horizontal asymptotes straight off the graph.",
    trick:
      "Graph the rational function. Desmos renders a visible gap or dashed-looking break at vertical asymptotes, and you can zoom out far to see the curve flatten toward its horizontal asymptote.",
    syntaxTips: [
      "Type the function as a fraction: y = (x+3)/(x-5)",
      "Zoom in near suspected vertical asymptotes — the graph shoots off toward infinity",
      "Zoom out (scroll out repeatedly) to see the horizontal asymptote the curve approaches",
    ],
  },
  {
    slug: "circles",
    title: "Circle Equations",
    shortDescription: "Graph center-radius form directly and read off circle features visually.",
    trick:
      "Desmos graphs (x-h)^2 + (y-k)^2 = r^2 exactly as written — no rearranging needed. Plot a point to see visually whether it lands inside, on, or outside the circle.",
    syntaxTips: [
      "Type the equation exactly as given: (x-4)^2+(y+1)^2=49",
      "Plot a point as an ordered pair to check its position relative to the circle, e.g. (9,2)",
      "The center is read directly from the signs inside each parenthesis (opposite of what's written)",
    ],
  },
  {
    slug: "slope-rate",
    title: "Slope & Rate of Change",
    shortDescription: "Find slope from two points by plotting them — no formula needed.",
    trick:
      "Plot both points as ordered pairs and let Desmos draw a line through them, or simply type the slope formula with the actual numbers plugged in to get an instant decimal or fraction.",
    syntaxTips: [
      "Plot the two given points: (-2,5) and (3,-5)",
      "Type the slope formula directly with numbers: (-5-5)/(3-(-2)) to get the value instantly",
      "Graph y = mx + b with your computed slope to double-check it passes through both points",
    ],
  },
  {
    slug: "distance-midpoint",
    title: "Distance & Midpoint",
    shortDescription: "Compute distance and midpoint with built-in Desmos functions.",
    trick:
      "Desmos has distance(...) and midpoint(...) built in — type the two points directly and get the exact answer with zero formula memorization.",
    syntaxTips: [
      "Distance: distance((1,2),(7,10))",
      "Midpoint: midpoint((-3,8),(9,-2))",
      "Plot both points to sanity-check your answer visually",
    ],
  },
  {
    slug: "transformations",
    title: "Function Transformations",
    shortDescription: "See shifts, stretches, and reflections happen live with sliders.",
    trick:
      "Define a base function, then graph a transformed version using sliders for the shift and stretch amounts. Dragging the sliders shows exactly how each number moves or reshapes the graph.",
    syntaxTips: [
      "Define the base function: f(x) = x^2",
      "Graph a general transformed version: a*f(x-h)+k",
      "Click each letter (a, h, k) and 'add slider', then drag to see its effect in real time",
    ],
  },
  {
    slug: "sliders-parameters",
    title: "Solving for Unknown Parameters",
    shortDescription: "Find an unknown constant by making the graph fit a given condition.",
    trick:
      "When a problem gives you a function with an unknown constant plus one condition it must satisfy, create a slider for the constant and drag it until the graph passes through the required point — or just solve algebraically and confirm visually.",
    syntaxTips: [
      "Type the function with the unknown left as a letter: y = a*x^2",
      "Click the letter and choose 'add slider' to create a draggable parameter",
      "Plot the required point and drag the slider until the curve passes through it",
    ],
  },
  {
    slug: "trig-basics",
    title: "Trig: Period & Amplitude",
    shortDescription: "Read amplitude and period straight off a sine or cosine graph.",
    trick:
      "Graph the trig function and trace along it (or use the table) to read the maximum value (amplitude + midline) and the horizontal distance between peaks (period) directly, without memorizing formulas.",
    syntaxTips: [
      "Type the function exactly: y = 4cos(2x)",
      "Check the mode: click the wrench/settings icon to switch between radians and degrees to match the problem",
      "Use the table to find the maximum value, or trace the curve to spot the first peak for the period",
    ],
  },
  {
    slug: "backsolving",
    title: "Backsolving Answer Choices",
    shortDescription: "Test answer choices numerically instead of solving algebraically.",
    trick:
      "When an equation looks messy, don't solve it by hand — graph both sides as separate functions, or just substitute each answer choice into the equation using the table feature and see which one makes both sides equal.",
    syntaxTips: [
      "Graph the left and right sides as two separate expressions and find where they intersect",
      "Or: build a table, list the answer choices as x-values, and check which output satisfies the equation",
      "Watch out for extraneous solutions with square roots — always verify in the original equation",
    ],
  },
  {
    slug: "equivalent-expressions",
    title: "Checking Equivalent Expressions",
    shortDescription: "Confirm two algebraic expressions are identical by graphing, not expanding.",
    trick:
      "Graph both expressions as separate functions — if their graphs sit exactly on top of each other (only one curve is visible), they're equivalent for every x. Even faster: graph expression1 minus expression2 and check that it's the flat line y = 0.",
    syntaxTips: [
      "Graph y1 = (first expression) and y2 = (second expression) and look for a single visible curve",
      "Fastest check: graph y = (expression 1) - (expression 2); if it's the flat line y = 0, they're equivalent",
      "Great for testing 'which choice is equivalent to...' answer options one at a time",
    ],
  },
  {
    slug: "number-of-solutions",
    title: "Number of Solutions to a System",
    shortDescription: "Count intersection points to tell 0, 1, 2, or infinite solutions apart.",
    trick:
      "Graph both equations in the system and literally count the intersection points. No crossings means no solution, one crossing means one solution, and if the two graphs completely overlap (you can only see one curve), the system has infinitely many solutions.",
    syntaxTips: [
      "Graph both equations in the same calculator and count where they cross",
      "Parallel lines that never touch mean 0 solutions",
      "If the graphs look identical and overlap completely, the system has infinitely many solutions",
    ],
  },
  {
    slug: "solve-in-terms-of",
    title: "Solving In Terms Of Another Variable",
    shortDescription: "Find one variable's value given another, without rearranging the formula first.",
    trick:
      "Desmos graphs equations exactly as given — they don't need to be solved for y first. To find x given a y-value (or vice versa), graph the original equation plus a horizontal or vertical line at the known value, then click the intersection to read the other variable.",
    syntaxTips: [
      "Type the equation exactly as given, e.g. 2x + 5y = 20 — no need to isolate a variable",
      "To find x when y = k: graph the equation and y = k, then click the intersection",
      "To find y when x = k: graph the equation and x = k (a vertical line), then click the intersection",
      "For a formula with an unknown constant, add a slider for it and drag until the graph matches the given condition",
    ],
  },
  {
    slug: "polynomial-intersections",
    title: "Polynomial-to-Polynomial Intersections",
    shortDescription: "Find every crossing point between two higher-degree curves at once.",
    trick:
      "Graph both polynomials in the same calculator and click every visible intersection point — curves of degree 2 or higher can cross more than twice, so zoom out first to make sure you've found all of them.",
    syntaxTips: [
      "Graph both polynomials on separate lines",
      "Zoom out before counting intersections — higher-degree curves can cross far from the origin",
      "Click each crossing point individually to read its exact coordinates",
    ],
  },
  {
    slug: "statistics-lists",
    title: "Mean, Median & Range with Lists",
    shortDescription: "Compute data-set statistics instantly using Desmos lists.",
    trick:
      "Type a data set as a list using curly braces, then use Desmos's built-in statistics functions — mean(), median(), and stdev() — to get the answer in one line, with range computed as max() minus min().",
    syntaxTips: [
      "Type a list with curly braces: L = {4, 8, 2, 9, 5}",
      "mean(L) and median(L) return the average and median instantly",
      "stdev(L) returns the standard deviation",
      "There's no built-in range function — type max(L) - min(L) directly",
    ],
  },
  {
    slug: "percentages",
    title: "Percent Word Problems",
    shortDescription: "Chain percent calculations in a single typed expression.",
    trick:
      "Type the entire percent calculation as one expression instead of converting percents to decimals by hand — Desmos evaluates it immediately, and you can chain multiple percent changes (like a discount followed by a tax) in a single line.",
    syntaxTips: [
      "Type a percent directly as a decimal: 0.15*240 for '15% of 240'",
      "Percent change in one line: (new - old)/old * 100",
      "Chain multiple percent changes together: 500*1.08*0.95 for an 8% increase followed by a 5% decrease",
    ],
  },
  {
    slug: "special-angle-trig",
    title: "Special Angles & Exact Trig Values",
    shortDescription: "Get exact sine, cosine, and tangent values without the unit circle.",
    trick:
      "Toggle Desmos into degree mode and type the trig expression directly — no unit circle memorization needed. Compare the decimal Desmos gives you against common exact forms like √2/2 or √3/2 to confirm the exact value asked for.",
    syntaxTips: [
      "Click the wrench/settings icon to switch between Degrees and Radians before evaluating anything",
      "In degree mode, type sin(30) directly to get 0.5 instantly",
      "In radian mode, pi is recognized automatically: type cos(pi/3)",
    ],
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
