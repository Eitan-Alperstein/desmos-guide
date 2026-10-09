import { Question } from "./types";

export const questions: Question[] = [
  // ---------- linear-systems ----------
  {
    id: "linear-systems-1",
    categorySlug: "linear-systems",
    difficulty: "easy",
    responseType: "mcq",
    prompt:
      "A system of equations is given below. What is the solution (x, y) to the system?\n\ny = 2x - 3\ny = -x + 9",
    choices: ["(4, 5)", "(3, 3)", "(5, 4)", "(-4, -5)"],
    answer: "(4, 5)",
    hints: [
      "Type both equations into Desmos exactly as written.",
      "Click directly on the point where the two lines cross.",
    ],
    steps: [
      "Type y = 2x - 3 on the first line.",
      "Type y = -x + 9 on the second line.",
      "Click the intersection point shown on the graph — Desmos labels it (4, 5).",
    ],
  },
  {
    id: "linear-systems-2",
    categorySlug: "linear-systems",
    difficulty: "medium",
    responseType: "grid-in",
    prompt:
      "The system below has solution (x, y). What is the value of x + y?\n\ny = (1/2)x + 1\n3x - 2y = 4",
    answer: "5.5",
    acceptableAnswers: ["5.5", "11/2"],
    hints: [
      "Type the first equation as given. Solve the second for y before typing it, or just type it exactly as written — Desmos can graph it either way.",
      "Click the intersection, then add x + y as its own calculation using the coordinates you found.",
    ],
    steps: [
      "Type y = (1/2)x + 1.",
      "Type 3x - 2y = 4 directly — Desmos can graph equations that aren't solved for y.",
      "Click the intersection point: (3, 2.5).",
      "x + y = 3 + 2.5 = 5.5.",
    ],
  },

  // ---------- quadratic-roots ----------
  {
    id: "quadratic-roots-1",
    categorySlug: "quadratic-roots",
    difficulty: "easy",
    responseType: "mcq",
    prompt: "What are the roots of y = x^2 - 5x + 6?",
    choices: ["x = 2 and x = 3", "x = -2 and x = -3", "x = 1 and x = 6", "x = -1 and x = -6"],
    answer: "x = 2 and x = 3",
    hints: [
      "Type y = x^2 - 5x + 6 into Desmos.",
      "Click on each point where the curve crosses the x-axis.",
    ],
    steps: [
      "Type y = x^2 - 5x + 6.",
      "Click near the left x-intercept — Desmos snaps to (2, 0).",
      "Click near the right x-intercept — Desmos snaps to (3, 0).",
    ],
  },
  {
    id: "quadratic-roots-2",
    categorySlug: "quadratic-roots",
    difficulty: "medium",
    responseType: "grid-in",
    prompt:
      "One root of y = 2x^2 + 7x - 15 is x = -5. What is the other root?",
    answer: "1.5",
    acceptableAnswers: ["1.5", "3/2"],
    hints: [
      "Graph the quadratic and look at both x-intercepts.",
      "You already know one is at x = -5 — find the other one on the graph.",
    ],
    steps: [
      "Type y = 2x^2 + 7x - 15.",
      "Click the x-intercept near x = -5 to confirm it.",
      "Click the other x-intercept — Desmos snaps to (1.5, 0).",
    ],
  },

  // ---------- vertex-max-min ----------
  {
    id: "vertex-max-min-1",
    categorySlug: "vertex-max-min",
    difficulty: "medium",
    responseType: "mcq",
    prompt:
      "A ball's height in feet is given by h(t) = -16t^2 + 64t + 5, where t is time in seconds. What is the maximum height, in feet, reached by the ball?",
    choices: ["69", "64", "5", "128"],
    answer: "69",
    hints: [
      "Graph the function and look for the highest point on the curve.",
      "Click directly on the peak to reveal its exact coordinates.",
    ],
    steps: [
      "Type y = -16x^2 + 64x + 5.",
      "Click on the peak of the parabola.",
      "Desmos labels the vertex as (2, 69) — the maximum height is 69 feet.",
    ],
  },
  {
    id: "vertex-max-min-2",
    categorySlug: "vertex-max-min",
    difficulty: "hard",
    responseType: "grid-in",
    prompt:
      "A company's weekly profit, in dollars, is modeled by P(x) = -5x^2 + 300x - 2000, where x is the number of units sold. What is the maximum weekly profit, in dollars?",
    answer: "2500",
    hints: [
      "Graph the profit function.",
      "The maximum profit is the y-value of the highest point on the parabola.",
    ],
    steps: [
      "Type y = -5x^2 + 300x - 2000.",
      "Click on the peak of the curve.",
      "Desmos labels the vertex as (30, 2500) — the maximum profit is $2500.",
    ],
  },

  // ---------- linear-quadratic-system ----------
  {
    id: "linear-quadratic-system-1",
    categorySlug: "linear-quadratic-system",
    difficulty: "medium",
    responseType: "mcq",
    prompt:
      "For what value(s) of x do the graphs of y = x^2 - 4x + 3 and y = x - 1 intersect?",
    choices: ["x = 1 and x = 4", "x = -1 and x = -4", "x = 0 and x = 5", "x = 2 and x = 3"],
    answer: "x = 1 and x = 4",
    hints: [
      "Graph both the parabola and the line in the same calculator.",
      "Click on both points where the two graphs cross.",
    ],
    steps: [
      "Type y = x^2 - 4x + 3.",
      "Type y = x - 1 on the next line.",
      "Click each intersection point — Desmos shows (1, 0) and (4, 3).",
    ],
  },
  {
    id: "linear-quadratic-system-2",
    categorySlug: "linear-quadratic-system",
    difficulty: "hard",
    responseType: "grid-in",
    prompt:
      "The horizontal line y = 4 intersects the parabola y = x^2 - 6x + 13 at exactly one point. What is the x-coordinate of that point?",
    answer: "3",
    hints: [
      "Graph both the line and the parabola.",
      "A line that touches a parabola at exactly one point is tangent to it — look for where they just barely meet.",
    ],
    steps: [
      "Type y = x^2 - 6x + 13.",
      "Type y = 4 on the next line.",
      "Click the single point where the line touches the parabola — Desmos shows (3, 4), confirming the line is tangent at the vertex.",
    ],
  },

  // ---------- absolute-value ----------
  {
    id: "absolute-value-1",
    categorySlug: "absolute-value",
    difficulty: "easy",
    responseType: "mcq",
    prompt: "What are the solutions to |2x - 6| = 10?",
    choices: ["x = 8 and x = -2", "x = 8 and x = 2", "x = -8 and x = 2", "x = 16 and x = -4"],
    answer: "x = 8 and x = -2",
    hints: [
      "Graph y = abs(2x - 6) and y = 10 together.",
      "Click both points where the V-shape meets the horizontal line.",
    ],
    steps: [
      "Type y = abs(2x - 6).",
      "Type y = 10 on the next line.",
      "Click both intersection points — Desmos shows (8, 10) and (-2, 10).",
    ],
  },
  {
    id: "absolute-value-2",
    categorySlug: "absolute-value",
    difficulty: "medium",
    responseType: "grid-in",
    prompt: "What is the positive solution to |3x + 1| = 2x + 9?",
    answer: "8",
    hints: [
      "Graph y = abs(3x + 1) and y = 2x + 9 together.",
      "There may be two intersection points — pick the one with a positive x-coordinate.",
    ],
    steps: [
      "Type y = abs(3x + 1).",
      "Type y = 2x + 9 on the next line.",
      "Click the intersection point with a positive x-value — Desmos shows (8, 25).",
    ],
  },

  // ---------- inequalities-shading ----------
  {
    id: "inequalities-shading-1",
    categorySlug: "inequalities-shading",
    difficulty: "medium",
    responseType: "mcq",
    prompt:
      "Which point is a solution to the system below?\n\ny ≤ -x + 4\ny > 2x - 1",
    choices: ["(0, 0)", "(5, 0)", "(-3, 8)", "(1, 5)"],
    answer: "(0, 0)",
    hints: [
      "Type both inequalities into Desmos using <= and > — it will shade both regions.",
      "Plot each answer choice as a point and see which one lands in the overlap of both shaded regions.",
    ],
    steps: [
      "Type y <= -x + 4.",
      "Type y > 2x - 1 on the next line.",
      "Plot each choice as a point, e.g. (0,0), (5,0), (-3,8), (1,5).",
      "Only (0, 0) lands inside both shaded regions.",
    ],
  },
  {
    id: "inequalities-shading-2",
    categorySlug: "inequalities-shading",
    difficulty: "hard",
    responseType: "grid-in",
    prompt:
      "What is the greatest integer value of x for which the point (x, 3) is NOT a solution to the inequality y < x + 2?",
    answer: "1",
    hints: [
      "Graph y < x + 2 and look at the shaded region.",
      "Plot points (x, 3) for a few integer values of x and see where they fall outside the shaded region.",
    ],
    steps: [
      "Type y < x + 2 and note the shaded region (strictly above the boundary line is unshaded).",
      "Plot (1, 3): it sits exactly on the boundary line (3 = 1 + 2), so it's NOT in the shaded (open) region.",
      "Plot (2, 3): it's inside the shaded region, so it IS a solution.",
      "The greatest integer x where (x, 3) is not a solution is x = 1.",
    ],
  },

  // ---------- table-feature ----------
  {
    id: "table-feature-1",
    categorySlug: "table-feature",
    difficulty: "easy",
    responseType: "mcq",
    prompt: "If f(x) = 3x^2 - 2x + 1, what is f(-2)?",
    choices: ["17", "9", "13", "21"],
    answer: "17",
    hints: [
      "Define f(x) in Desmos first.",
      "Open a table and type -2 into the x-column to see f(-2) automatically.",
    ],
    steps: [
      "Type f(x) = 3x^2 - 2x + 1.",
      "Click '+' and add a table.",
      "Type -2 in the x1 column — the table shows f(x1) = 17.",
    ],
  },
  {
    id: "table-feature-2",
    categorySlug: "table-feature",
    difficulty: "medium",
    responseType: "grid-in",
    prompt:
      "A function is defined by g(x) = (x^3 - 4x)/(x - 2) for x ≠ 2. What is g(3)?",
    answer: "15",
    hints: [
      "Define g(x) exactly as written, including the fraction.",
      "Use the table feature to evaluate g(3) directly.",
    ],
    steps: [
      "Type g(x) = (x^3 - 4x)/(x - 2).",
      "Click '+' and add a table.",
      "Type 3 in the x1 column — the table shows g(x1) = 15.",
    ],
  },

  // ---------- regression ----------
  {
    id: "regression-1",
    categorySlug: "regression",
    difficulty: "medium",
    responseType: "mcq",
    prompt:
      "A set of data points is entered into a Desmos table with columns x1 and y1. Which expression correctly performs a linear regression on this data?",
    choices: ["y1 ~ m x1 + b", "y = mx + b", "y1 = m x1 + b", "regression(x1, y1)"],
    answer: "y1 ~ m x1 + b",
    hints: [
      "Regression in Desmos uses a tilde (~), not an equals sign.",
      "The regression must reference the table's actual column names, x1 and y1.",
    ],
    steps: [
      "Build a table with columns x1 and y1 and enter the data.",
      "Below the table, type y1 ~ m*x1 + b.",
      "Desmos solves for m and b and displays their values.",
    ],
  },
  {
    id: "regression-2",
    categorySlug: "regression",
    difficulty: "medium",
    responseType: "grid-in",
    prompt:
      "Given the points (1, 3), (2, 5), (3, 7), and (4, 9), the line of best fit is y = mx + b. What is the value of m?",
    answer: "2",
    hints: [
      "Enter the four points into a Desmos table.",
      "Run a linear regression using the tilde syntax and read off the reported value of m.",
    ],
    steps: [
      "Build a table with x1: 1, 2, 3, 4 and y1: 3, 5, 7, 9.",
      "Type y1 ~ m*x1 + b below the table.",
      "Desmos reports m = 2 (and b = 1), since the data is perfectly linear.",
    ],
  },

  // ---------- exponential ----------
  {
    id: "exponential-1",
    categorySlug: "exponential",
    difficulty: "medium",
    responseType: "mcq",
    prompt:
      "A population is modeled by P(t) = 500(1.08)^t, where t is years. To the nearest whole number, what is the population after 10 years?",
    choices: ["1079", "1080", "1000", "950"],
    answer: "1079",
    hints: [
      "Type the model into Desmos as a function of t.",
      "Use the table feature to evaluate P(10) directly.",
    ],
    steps: [
      "Type P(t) = 500(1.08)^t.",
      "Add a table and type 10 in the t1 column.",
      "The table shows P(t1) ≈ 1079.46, which rounds to 1079.",
    ],
  },
  {
    id: "exponential-2",
    categorySlug: "exponential",
    difficulty: "hard",
    responseType: "grid-in",
    prompt:
      "A radioactive substance decays according to A(t) = 200(0.5)^(t/5), where t is in years. What is the first whole year in which the amount remaining drops below 25 grams?",
    answer: "16",
    hints: [
      "Graph the decay model and also graph the horizontal line y = 25.",
      "Use the table to check whole-number years right around the intersection.",
    ],
    steps: [
      "Type y = 200(0.5)^(x/5) and y = 25 on the next line.",
      "Click the intersection point — Desmos shows x = 15 exactly, where A(t) equals 25.",
      "Check the table at integer years: A(15) = 25 (not yet below), A(16) ≈ 21.8 (below 25).",
      "The first whole year it drops below 25 grams is year 16.",
    ],
  },

  // ---------- polynomial-factoring ----------
  {
    id: "polynomial-factoring-1",
    categorySlug: "polynomial-factoring",
    difficulty: "medium",
    responseType: "mcq",
    prompt: "Which of the following is a factor of x^3 - 2x^2 - 5x + 6?",
    choices: ["(x - 1)", "(x + 1)", "(x - 2)", "(x + 6)"],
    answer: "(x - 1)",
    hints: [
      "Graph the polynomial and find its x-intercepts.",
      "Each root r you find means (x - r) is a factor — match that against the choices.",
    ],
    steps: [
      "Type y = x^3 - 2x^2 - 5x + 6.",
      "Click each x-intercept — Desmos shows roots at x = 1, x = -2, and x = 3.",
      "A root of x = 1 means (x - 1) is a factor.",
    ],
  },
  {
    id: "polynomial-factoring-2",
    categorySlug: "polynomial-factoring",
    difficulty: "hard",
    responseType: "grid-in",
    prompt:
      "The polynomial p(x) = x^3 - 7x + 6 has three real roots. What is the sum of all three roots?",
    answer: "0",
    hints: [
      "Graph the polynomial and find all three x-intercepts.",
      "Add up the three root values you find.",
    ],
    steps: [
      "Type y = x^3 - 7x + 6.",
      "Click each x-intercept — Desmos shows roots at x = -3, x = 1, and x = 2.",
      "Sum: -3 + 1 + 2 = 0.",
    ],
  },

  // ---------- rational-asymptotes ----------
  {
    id: "rational-asymptotes-1",
    categorySlug: "rational-asymptotes",
    difficulty: "medium",
    responseType: "mcq",
    prompt: "What is the equation of the vertical asymptote of f(x) = (x + 3)/(x - 5)?",
    choices: ["x = 5", "x = -5", "x = 3", "x = -3"],
    answer: "x = 5",
    hints: [
      "Graph the function and look for the x-value the curve never touches.",
      "Zoom in near that x-value — the graph shoots off toward infinity on both sides.",
    ],
    steps: [
      "Type y = (x + 3)/(x - 5).",
      "Notice the graph breaks apart and shoots to infinity near x = 5.",
      "The vertical asymptote is x = 5.",
    ],
  },
  {
    id: "rational-asymptotes-2",
    categorySlug: "rational-asymptotes",
    difficulty: "medium",
    responseType: "grid-in",
    prompt:
      "As x approaches infinity, the function f(x) = (6x^2 + x - 1)/(2x^2 - 5) approaches what value?",
    answer: "3",
    hints: [
      "Graph the function and zoom out far to the left and right.",
      "Use the table to evaluate the function at a very large x-value, like x = 10000.",
    ],
    steps: [
      "Type y = (6x^2 + x - 1)/(2x^2 - 5).",
      "Zoom out repeatedly — the curve flattens and approaches a horizontal line.",
      "Add a table and evaluate at x = 10000 — the output is extremely close to 3.",
    ],
  },

  // ---------- circles ----------
  {
    id: "circles-1",
    categorySlug: "circles",
    difficulty: "easy",
    responseType: "mcq",
    prompt: "What is the center and radius of the circle (x - 4)^2 + (y + 1)^2 = 49?",
    choices: [
      "center (4, -1), radius 7",
      "center (-4, 1), radius 7",
      "center (4, -1), radius 49",
      "center (-4, 1), radius 49",
    ],
    answer: "center (4, -1), radius 7",
    hints: [
      "Type the equation into Desmos exactly as written — it graphs directly, no rearranging needed.",
      "The center is the opposite of the signs shown inside the parentheses, and the radius is the square root of the right-hand side.",
    ],
    steps: [
      "Type (x-4)^2+(y+1)^2=49.",
      "Desmos draws a circle centered at (4, -1).",
      "Since 49 = 7^2, the radius is 7.",
    ],
  },
  {
    id: "circles-2",
    categorySlug: "circles",
    difficulty: "medium",
    responseType: "mcq",
    prompt:
      "Does the point (9, 2) lie inside, on, or outside the circle (x - 4)^2 + (y + 1)^2 = 49?",
    choices: ["Inside", "On the circle", "Outside", "Cannot be determined"],
    answer: "Inside",
    hints: [
      "Graph the circle, then plot the point as an ordered pair.",
      "See visually whether the point falls within the boundary of the circle.",
    ],
    steps: [
      "Type (x-4)^2+(y+1)^2=49.",
      "Plot the point (9, 2).",
      "The point appears clearly inside the circle's boundary.",
    ],
  },

  // ---------- slope-rate ----------
  {
    id: "slope-rate-1",
    categorySlug: "slope-rate",
    difficulty: "easy",
    responseType: "mcq",
    prompt: "A line passes through the points (-2, 5) and (3, -5). What is the slope of the line?",
    choices: ["-2", "2", "-1/2", "1/2"],
    answer: "-2",
    hints: [
      "Plot both points in Desmos.",
      "Type the slope formula directly with the actual numbers plugged in to get an instant value.",
    ],
    steps: [
      "Plot (-2, 5) and (3, -5).",
      "Type (-5-5)/(3-(-2)) directly into Desmos.",
      "Desmos evaluates this to -2.",
    ],
  },
  {
    id: "slope-rate-2",
    categorySlug: "slope-rate",
    difficulty: "medium",
    responseType: "grid-in",
    prompt:
      "A line has a slope of 3/4 and passes through the point (8, 2). What is the y-intercept of the line?",
    answer: "-4",
    hints: [
      "Graph y = (3/4)(x - 8) + 2 — this form guarantees it passes through (8, 2) with the given slope.",
      "Click where the line crosses the y-axis.",
    ],
    steps: [
      "Type y = (3/4)(x - 8) + 2.",
      "Click the point where the line crosses the y-axis.",
      "Desmos shows the y-intercept at (0, -4).",
    ],
  },

  // ---------- distance-midpoint ----------
  {
    id: "distance-midpoint-1",
    categorySlug: "distance-midpoint",
    difficulty: "easy",
    responseType: "grid-in",
    prompt: "What is the distance between the points (1, 2) and (7, 10)?",
    answer: "10",
    hints: [
      "Desmos has a built-in distance function.",
      "Type the two points directly as the arguments.",
    ],
    steps: [
      "Type distance((1,2),(7,10)) into Desmos.",
      "Desmos evaluates this directly to 10.",
    ],
  },
  {
    id: "distance-midpoint-2",
    categorySlug: "distance-midpoint",
    difficulty: "easy",
    responseType: "mcq",
    prompt: "What is the midpoint of the segment connecting (-3, 8) and (9, -2)?",
    choices: ["(3, 3)", "(6, 6)", "(-6, -6)", "(3, -3)"],
    answer: "(3, 3)",
    hints: [
      "Desmos has a built-in midpoint function.",
      "Type the two points directly as the arguments.",
    ],
    steps: [
      "Type midpoint((-3,8),(9,-2)) into Desmos.",
      "Desmos evaluates this directly to (3, 3).",
    ],
  },

  // ---------- transformations ----------
  {
    id: "transformations-1",
    categorySlug: "transformations",
    difficulty: "medium",
    responseType: "mcq",
    prompt:
      "The graph of g(x) = (x - 3)^2 + 2 is the graph of f(x) = x^2 after which transformation?",
    choices: [
      "Shift right 3, up 2",
      "Shift left 3, down 2",
      "Shift right 3, down 2",
      "Shift left 3, up 2",
    ],
    answer: "Shift right 3, up 2",
    hints: [
      "Define f(x) = x^2, then graph g(x) = f(x-h)+k with sliders for h and k.",
      "Drag the sliders until g(x) matches (x-3)^2+2, and read off the shift directly.",
    ],
    steps: [
      "Type f(x) = x^2.",
      "Type g(x) = f(x - h) + k, then add sliders for h and k.",
      "Drag h to 3 and k to 2 — the graph now matches (x-3)^2+2, confirming a shift right 3 and up 2.",
    ],
  },
  {
    id: "transformations-2",
    categorySlug: "transformations",
    difficulty: "hard",
    responseType: "mcq",
    prompt:
      "If f(x) = |x| and g(x) = -2f(x + 1) - 3, which statement describes the transformation from f to g?",
    choices: [
      "Shift left 1, vertically stretch by 2, reflect over the x-axis, shift down 3",
      "Shift right 1, vertically stretch by 2, reflect over the x-axis, shift down 3",
      "Shift left 1, vertically stretch by 2, no reflection, shift down 3",
      "Shift left 1, vertically shrink by 1/2, reflect over the x-axis, shift down 3",
    ],
    answer: "Shift left 1, vertically stretch by 2, reflect over the x-axis, shift down 3",
    hints: [
      "Graph f(x) = abs(x) and g(x) = -2*f(x+1) - 3 together in the same calculator.",
      "Compare the two graphs point by point to see the shift, stretch, and reflection.",
    ],
    steps: [
      "Type f(x) = abs(x) and g(x) = -2 f(x+1) - 3.",
      "Observe the graph of g: its vertex moved to (-1, -3), it opens downward, and it's steeper than f.",
      "This matches: shift left 1, vertical stretch by 2, reflect over the x-axis, shift down 3.",
    ],
  },

  // ---------- sliders-parameters ----------
  {
    id: "sliders-parameters-1",
    categorySlug: "sliders-parameters",
    difficulty: "medium",
    responseType: "grid-in",
    prompt: "The graph of y = ax^2 passes through the point (3, 18). What is the value of a?",
    answer: "2",
    hints: [
      "Type y = a*x^2 and add a slider for a.",
      "Plot the point (3, 18) and drag the slider until the curve passes through it.",
    ],
    steps: [
      "Type y = a*x^2 and click 'add slider' for a.",
      "Plot the point (3, 18).",
      "Drag the slider until the curve passes through the point — this happens at a = 2.",
    ],
  },
  {
    id: "sliders-parameters-2",
    categorySlug: "sliders-parameters",
    difficulty: "hard",
    responseType: "grid-in",
    prompt:
      "The function f(x) = x^2 + bx + 12 has a root at x = -4. What is the value of b?",
    answer: "7",
    hints: [
      "Type y = x^2 + b*x + 12 and add a slider for b.",
      "Drag the slider until the curve crosses the x-axis at x = -4.",
    ],
    steps: [
      "Type y = x^2 + b*x + 12 and add a slider for b.",
      "Drag the slider until the graph crosses the x-axis at x = -4.",
      "This occurs at b = 7 — Desmos confirms the root lands exactly at (-4, 0).",
    ],
  },

  // ---------- trig-basics ----------
  {
    id: "trig-basics-1",
    categorySlug: "trig-basics",
    difficulty: "medium",
    responseType: "mcq",
    prompt: "What is the amplitude and period of y = 4cos(2x)?",
    choices: [
      "Amplitude 4, period π",
      "Amplitude 2, period π",
      "Amplitude 4, period 2π",
      "Amplitude 8, period π",
    ],
    answer: "Amplitude 4, period π",
    hints: [
      "Graph the function and trace to find the maximum height (amplitude).",
      "Measure the horizontal distance between two consecutive peaks for the period.",
    ],
    steps: [
      "Type y = 4cos(2x).",
      "Trace the curve: the max height is 4, so the amplitude is 4.",
      "The distance between consecutive peaks is π, so the period is π.",
    ],
  },
  {
    id: "trig-basics-2",
    categorySlug: "trig-basics",
    difficulty: "medium",
    responseType: "grid-in",
    prompt:
      "The function h(t) = 3sin((π/6)t) + 10 models the height, in meters, of a point on a Ferris wheel after t minutes. What is the maximum height, in meters, reached?",
    answer: "13",
    hints: [
      "Graph the function and find its highest point.",
      "Click directly on the peak to read off the exact maximum height.",
    ],
    steps: [
      "Type y = 3sin((π/6)x) + 10.",
      "Click on the highest point of the curve.",
      "Desmos shows the maximum y-value is 13.",
    ],
  },

  // ---------- backsolving ----------
  {
    id: "backsolving-1",
    categorySlug: "backsolving",
    difficulty: "medium",
    responseType: "mcq",
    prompt: "If 2(x - 3) + 5 = 3x - 4, which value of x satisfies the equation?",
    choices: ["3", "1", "5", "-3"],
    answer: "3",
    hints: [
      "Graph the left side and right side as two separate functions of x.",
      "Click the point where the two graphs intersect to find the x-value that makes them equal.",
    ],
    steps: [
      "Type y = 2(x - 3) + 5.",
      "Type y = 3x - 4 on the next line.",
      "Click the intersection point — Desmos shows x = 3.",
    ],
  },
  {
    id: "backsolving-2",
    categorySlug: "backsolving",
    difficulty: "hard",
    responseType: "mcq",
    prompt: "Which value of x is a solution to the equation sqrt(x + 9) = x - 3?",
    choices: ["7", "0", "-7", "9"],
    answer: "7",
    hints: [
      "Graph y = sqrt(x + 9) and y = x - 3 as two separate functions.",
      "Click the intersection point — but double check it by substituting back in, since square-root equations can produce extraneous solutions.",
    ],
    steps: [
      "Type y = sqrt(x + 9).",
      "Type y = x - 3 on the next line.",
      "Click the intersection point — Desmos shows x = 7.",
      "Check: sqrt(16) = 4, and 7 - 3 = 4. It checks out (x = 0 would be extraneous).",
    ],
  },

  // ---------- linear-systems (more) ----------
  {
    id: "linear-systems-3",
    categorySlug: "linear-systems",
    difficulty: "easy",
    responseType: "mcq",
    prompt: "What is the solution (x, y) to the system below?\n\ny = x + 4\ny = -2x + 1",
    choices: ["(-1, 3)", "(1, -3)", "(3, -1)", "(-3, 1)"],
    answer: "(-1, 3)",
    hints: ["Graph both lines.", "Click the intersection point."],
    steps: [
      "Type y = x + 4.",
      "Type y = -2x + 1.",
      "Click the intersection — Desmos shows (-1, 3).",
    ],
  },
  {
    id: "linear-systems-4",
    categorySlug: "linear-systems",
    difficulty: "hard",
    responseType: "grid-in",
    prompt:
      "The system below has solution (x, y).\n\n2x + 3y = 12\nx - y = 1\n\nWhat is the value of x · y?",
    answer: "6",
    hints: [
      "Type both equations exactly as given — Desmos can graph equations that aren't solved for y.",
      "Click the intersection, then multiply the two coordinates.",
    ],
    steps: [
      "Type 2x + 3y = 12.",
      "Type x - y = 1.",
      "Click the intersection: (3, 2).",
      "x · y = 3 · 2 = 6.",
    ],
  },

  // ---------- quadratic-roots (more) ----------
  {
    id: "quadratic-roots-3",
    categorySlug: "quadratic-roots",
    difficulty: "easy",
    responseType: "mcq",
    prompt: "What are the roots of y = x^2 - x - 12?",
    choices: ["x = 4 and x = -3", "x = -4 and x = 3", "x = 12 and x = -1", "x = 1 and x = -12"],
    answer: "x = 4 and x = -3",
    hints: ["Graph the quadratic.", "Click each x-intercept."],
    steps: [
      "Type y = x^2 - x - 12.",
      "Click each x-intercept — Desmos shows (-3, 0) and (4, 0).",
    ],
  },
  {
    id: "quadratic-roots-4",
    categorySlug: "quadratic-roots",
    difficulty: "hard",
    responseType: "grid-in",
    prompt: "One root of y = x^2 + x - 12 is x = 3. What is the other root?",
    answer: "-4",
    hints: ["Graph the quadratic.", "Find the x-intercept other than x = 3."],
    steps: [
      "Type y = x^2 + x - 12.",
      "Click the x-intercept near x = 3 to confirm it.",
      "Click the other x-intercept — Desmos shows (-4, 0).",
    ],
  },

  // ---------- vertex-max-min (more) ----------
  {
    id: "vertex-max-min-3",
    categorySlug: "vertex-max-min",
    difficulty: "easy",
    responseType: "mcq",
    prompt: "What is the minimum value of y = (x - 2)^2 - 9?",
    choices: ["-9", "2", "9", "-2"],
    answer: "-9",
    hints: ["Graph the function.", "Click on the lowest point of the curve."],
    steps: [
      "Type y = (x - 2)^2 - 9.",
      "Click the bottom of the parabola — Desmos labels the vertex as (2, -9).",
      "The minimum value is -9.",
    ],
  },
  {
    id: "vertex-max-min-4",
    categorySlug: "vertex-max-min",
    difficulty: "medium",
    responseType: "grid-in",
    prompt:
      "A ball's height in feet is modeled by h(t) = -16t^2 + 48t, where t is time in seconds. What is the maximum height, in feet, the ball reaches?",
    answer: "36",
    hints: ["Graph the function.", "Click on the peak of the curve."],
    steps: [
      "Type y = -16x^2 + 48x.",
      "Click the peak of the parabola — Desmos labels the vertex as (1.5, 36).",
      "The maximum height is 36 feet.",
    ],
  },

  // ---------- linear-quadratic-system (more) ----------
  {
    id: "linear-quadratic-system-3",
    categorySlug: "linear-quadratic-system",
    difficulty: "medium",
    responseType: "mcq",
    prompt: "For what value(s) of x do y = x^2 - 2x - 3 and y = 2x - 3 intersect?",
    choices: ["x = 0 and x = 4", "x = 0 and x = -4", "x = 3 and x = -1", "x = -3 and x = 1"],
    answer: "x = 0 and x = 4",
    hints: ["Graph the parabola and the line together.", "Click both intersection points."],
    steps: [
      "Type y = x^2 - 2x - 3.",
      "Type y = 2x - 3.",
      "Click each intersection — Desmos shows (0, -3) and (4, 5).",
    ],
  },
  {
    id: "linear-quadratic-system-4",
    categorySlug: "linear-quadratic-system",
    difficulty: "hard",
    responseType: "grid-in",
    prompt:
      "The graphs of y = x^2 - 5x + 4 and y = x - 1 intersect at two points. What is the positive difference between the x-coordinates of those points?",
    answer: "4",
    hints: ["Graph both.", "Click both intersection points and subtract the x-values."],
    steps: [
      "Type y = x^2 - 5x + 4.",
      "Type y = x - 1.",
      "Click both intersections — Desmos shows (1, 0) and (5, 4).",
      "Positive difference: 5 - 1 = 4.",
    ],
  },

  // ---------- absolute-value (more) ----------
  {
    id: "absolute-value-3",
    categorySlug: "absolute-value",
    difficulty: "easy",
    responseType: "mcq",
    prompt: "What are the solutions to |x - 5| = 3?",
    choices: ["x = 8 and x = 2", "x = -8 and x = -2", "x = 8 and x = -2", "x = 2 and x = -8"],
    answer: "x = 8 and x = 2",
    hints: ["Graph y = abs(x - 5) and y = 3.", "Click both intersection points."],
    steps: [
      "Type y = abs(x - 5).",
      "Type y = 3.",
      "Click both intersections — Desmos shows (2, 3) and (8, 3).",
    ],
  },
  {
    id: "absolute-value-4",
    categorySlug: "absolute-value",
    difficulty: "hard",
    responseType: "grid-in",
    prompt: "What is the positive solution to |2x - 1| = x + 5?",
    answer: "6",
    hints: ["Graph y = abs(2x - 1) and y = x + 5.", "Pick the intersection with positive x."],
    steps: [
      "Type y = abs(2x - 1).",
      "Type y = x + 5.",
      "Click the intersection with positive x — Desmos shows (6, 11).",
    ],
  },

  // ---------- inequalities-shading (more) ----------
  {
    id: "inequalities-shading-3",
    categorySlug: "inequalities-shading",
    difficulty: "medium",
    responseType: "mcq",
    prompt:
      "Which point is NOT a solution to the system below?\n\ny > x - 2\ny ≤ -x + 6",
    choices: ["(5, 5)", "(0, 0)", "(1, 1)", "(-5, -5)"],
    answer: "(5, 5)",
    hints: [
      "Graph both inequalities — Desmos shades both regions automatically.",
      "Plot each point and see which one falls outside the overlap.",
    ],
    steps: [
      "Type y > x - 2.",
      "Type y <= -x + 6.",
      "Plot each choice as a point. (5, 5) fails the second inequality: 5 ≤ 1 is false.",
    ],
  },
  {
    id: "inequalities-shading-4",
    categorySlug: "inequalities-shading",
    difficulty: "hard",
    responseType: "grid-in",
    prompt:
      "What is the greatest integer value of x for which the point (x, 7) is NOT a solution to y < 2x + 3?",
    answer: "2",
    hints: [
      "Graph y < 2x + 3 and look at the shaded region.",
      "Plot points (x, 7) for integer values of x near the boundary.",
    ],
    steps: [
      "Type y < 2x + 3.",
      "Plot (2, 7): since 7 < 7 is false, (2, 7) is NOT a solution.",
      "Plot (3, 7): since 7 < 9 is true, (3, 7) IS a solution.",
      "The greatest integer x where (x, 7) is not a solution is x = 2.",
    ],
  },

  // ---------- table-feature (more) ----------
  {
    id: "table-feature-3",
    categorySlug: "table-feature",
    difficulty: "easy",
    responseType: "grid-in",
    prompt: "If f(x) = 2x^2 + 1, what is f(-3)?",
    answer: "19",
    hints: ["Define f(x) in Desmos.", "Use a table and type -3 in the x-column."],
    steps: ["Type f(x) = 2x^2 + 1.", "Add a table and type -3 in x1 — the table shows 19."],
  },
  {
    id: "table-feature-4",
    categorySlug: "table-feature",
    difficulty: "medium",
    responseType: "grid-in",
    prompt: "A function is defined by g(x) = (2x^2 - 8)/(x + 2) for x ≠ -2. What is g(5)?",
    answer: "6",
    hints: ["Define g(x) exactly as written.", "Use the table feature to evaluate g(5)."],
    steps: [
      "Type g(x) = (2x^2 - 8)/(x + 2).",
      "Add a table and type 5 in x1 — the table shows g(x1) = 6.",
    ],
  },

  // ---------- regression (more) ----------
  {
    id: "regression-3",
    categorySlug: "regression",
    difficulty: "medium",
    responseType: "grid-in",
    prompt:
      "The points (1, 3), (2, 9), (3, 19), and (4, 33) fit a quadratic model y = ax^2 + bx + c. What is the value of a?",
    answer: "2",
    hints: [
      "Enter the four points into a Desmos table with columns x1 and y1.",
      "Run a quadratic regression: y1 ~ a*x1^2 + b*x1 + c.",
    ],
    steps: [
      "Build a table with x1: 1, 2, 3, 4 and y1: 3, 9, 19, 33.",
      "Type y1 ~ a*x1^2 + b*x1 + c below the table.",
      "Desmos reports a = 2 (with b = 0, c = 1).",
    ],
  },
  {
    id: "regression-4",
    categorySlug: "regression",
    difficulty: "hard",
    responseType: "grid-in",
    prompt:
      "The points (0, 3), (1, 6), (2, 12), and (3, 24) fit an exponential model y = a·b^x. What is the value of b?",
    answer: "2",
    hints: [
      "Enter the points into a table.",
      "Run an exponential regression: y1 ~ a*b^x1.",
    ],
    steps: [
      "Build a table with x1: 0, 1, 2, 3 and y1: 3, 6, 12, 24.",
      "Type y1 ~ a*b^x1 below the table.",
      "Desmos reports a = 3 and b = 2, since the data doubles each step.",
    ],
  },

  // ---------- exponential (more) ----------
  {
    id: "exponential-3",
    categorySlug: "exponential",
    difficulty: "easy",
    responseType: "grid-in",
    prompt:
      "A population is modeled by A(t) = 1000(0.9)^t, where t is years. To the nearest whole number, what is A(5)?",
    answer: "590",
    hints: ["Type the model into Desmos.", "Use the table feature to evaluate A(5)."],
    steps: [
      "Type A(t) = 1000(0.9)^t.",
      "Add a table and type 5 in the t1 column.",
      "The table shows A(t1) ≈ 590.49, which rounds to 590.",
    ],
  },
  {
    id: "exponential-4",
    categorySlug: "exponential",
    difficulty: "hard",
    responseType: "grid-in",
    prompt:
      "Using the same model A(t) = 1000(0.9)^t, what is the smallest whole number t for which A(t) drops below 500?",
    answer: "7",
    hints: [
      "Build a table and check consecutive whole-number values of t.",
      "Look for the first t where the output falls under 500.",
    ],
    steps: [
      "Type A(t) = 1000(0.9)^t and add a table.",
      "Check t = 6: A(6) ≈ 531.4, still above 500.",
      "Check t = 7: A(7) ≈ 478.3, below 500.",
      "The smallest whole number t is 7.",
    ],
  },

  // ---------- polynomial-factoring (more) ----------
  {
    id: "polynomial-factoring-3",
    categorySlug: "polynomial-factoring",
    difficulty: "easy",
    responseType: "mcq",
    prompt: "Which of the following is a factor of x^3 - 6x^2 + 11x - 6?",
    choices: ["(x - 2)", "(x + 1)", "(x - 5)", "(x + 6)"],
    answer: "(x - 2)",
    hints: ["Graph the polynomial.", "Click each x-intercept and match to the choices."],
    steps: [
      "Type y = x^3 - 6x^2 + 11x - 6.",
      "Click the x-intercepts — Desmos shows roots at x = 1, x = 2, x = 3.",
      "A root of x = 2 means (x - 2) is a factor.",
    ],
  },
  {
    id: "polynomial-factoring-4",
    categorySlug: "polynomial-factoring",
    difficulty: "hard",
    responseType: "grid-in",
    prompt: "The polynomial p(x) = x^3 - 3x^2 - 4x + 12 has three real roots. What is the sum of all three roots?",
    answer: "3",
    hints: ["Graph the polynomial.", "Find all three x-intercepts and add them."],
    steps: [
      "Type y = x^3 - 3x^2 - 4x + 12.",
      "Click each x-intercept — Desmos shows roots at x = -2, x = 2, and x = 3.",
      "Sum: -2 + 2 + 3 = 3.",
    ],
  },

  // ---------- rational-asymptotes (more) ----------
  {
    id: "rational-asymptotes-3",
    categorySlug: "rational-asymptotes",
    difficulty: "medium",
    responseType: "mcq",
    prompt: "What is the equation of the vertical asymptote of f(x) = (2x - 7)/(x + 3)?",
    choices: ["x = -3", "x = 3", "x = 7/2", "x = -7/2"],
    answer: "x = -3",
    hints: ["Graph the function.", "Find the x-value the curve shoots away from."],
    steps: [
      "Type y = (2x - 7)/(x + 3).",
      "The graph breaks apart and shoots to infinity near x = -3.",
      "The vertical asymptote is x = -3.",
    ],
  },
  {
    id: "rational-asymptotes-4",
    categorySlug: "rational-asymptotes",
    difficulty: "medium",
    responseType: "grid-in",
    prompt:
      "As x approaches infinity, the function f(x) = (4x^2 - 1)/(2x^2 + 5) approaches what value?",
    answer: "2",
    hints: ["Zoom out on the graph.", "Or evaluate the function at a very large x in a table."],
    steps: [
      "Type y = (4x^2 - 1)/(2x^2 + 5).",
      "Zoom out — the curve flattens toward a horizontal line.",
      "Check the table at x = 10000 — the output is extremely close to 2.",
    ],
  },

  // ---------- circles (more) ----------
  {
    id: "circles-3",
    categorySlug: "circles",
    difficulty: "easy",
    responseType: "mcq",
    prompt: "What is the center and radius of the circle (x + 2)^2 + (y - 5)^2 = 16?",
    choices: [
      "center (-2, 5), radius 4",
      "center (2, -5), radius 4",
      "center (-2, 5), radius 16",
      "center (2, -5), radius 16",
    ],
    answer: "center (-2, 5), radius 4",
    hints: ["Type the equation exactly as written.", "The center is opposite the signs shown; the radius is the square root of the right side."],
    steps: [
      "Type (x+2)^2+(y-5)^2=16.",
      "Desmos draws a circle centered at (-2, 5).",
      "Since 16 = 4^2, the radius is 4.",
    ],
  },
  {
    id: "circles-4",
    categorySlug: "circles",
    difficulty: "medium",
    responseType: "mcq",
    prompt: "Does the point (2, 5) lie inside, on, or outside the circle (x + 2)^2 + (y - 5)^2 = 16?",
    choices: ["Inside", "On the circle", "Outside", "Cannot be determined"],
    answer: "On the circle",
    hints: ["Graph the circle and plot the point.", "See exactly where the point lands relative to the boundary."],
    steps: [
      "Type (x+2)^2+(y-5)^2=16.",
      "Plot the point (2, 5).",
      "The point lands exactly on the circle's boundary: (2+2)^2 + (5-5)^2 = 16.",
    ],
  },

  // ---------- slope-rate (more) ----------
  {
    id: "slope-rate-3",
    categorySlug: "slope-rate",
    difficulty: "easy",
    responseType: "grid-in",
    prompt: "A line passes through (4, -1) and (-2, 11). What is the slope of the line?",
    answer: "-2",
    hints: ["Plot both points.", "Type the slope formula with the numbers plugged in directly."],
    steps: ["Plot (4, -1) and (-2, 11).", "Type (11-(-1))/(-2-4) directly into Desmos.", "Desmos evaluates this to -2."],
  },
  {
    id: "slope-rate-4",
    categorySlug: "slope-rate",
    difficulty: "medium",
    responseType: "grid-in",
    prompt: "A line has slope -3 and passes through the point (2, -4). What is its y-intercept?",
    answer: "2",
    hints: ["Graph y = -3(x - 2) - 4.", "Click where the line crosses the y-axis."],
    steps: [
      "Type y = -3(x - 2) - 4.",
      "Click the point where the line crosses the y-axis.",
      "Desmos shows the y-intercept at (0, 2).",
    ],
  },

  // ---------- distance-midpoint (more) ----------
  {
    id: "distance-midpoint-3",
    categorySlug: "distance-midpoint",
    difficulty: "easy",
    responseType: "grid-in",
    prompt: "What is the distance between the points (-4, -3) and (2, 5)?",
    answer: "10",
    hints: ["Use the built-in distance function.", "Type the two points directly as the arguments."],
    steps: ["Type distance((-4,-3),(2,5)) into Desmos.", "Desmos evaluates this directly to 10."],
  },
  {
    id: "distance-midpoint-4",
    categorySlug: "distance-midpoint",
    difficulty: "easy",
    responseType: "mcq",
    prompt: "What is the midpoint of the segment connecting (10, -6) and (-4, 2)?",
    choices: ["(3, -2)", "(6, -4)", "(-3, 2)", "(7, -2)"],
    answer: "(3, -2)",
    hints: ["Use the built-in midpoint function.", "Type the two points directly as the arguments."],
    steps: ["Type midpoint((10,-6),(-4,2)) into Desmos.", "Desmos evaluates this directly to (3, -2)."],
  },

  // ---------- transformations (more) ----------
  {
    id: "transformations-3",
    categorySlug: "transformations",
    difficulty: "medium",
    responseType: "mcq",
    prompt: "The graph of g(x) = f(x + 4) - 5 is the graph of f(x) shifted how?",
    choices: ["Left 4, down 5", "Right 4, up 5", "Left 4, up 5", "Right 4, down 5"],
    answer: "Left 4, down 5",
    hints: ["Define f(x) as anything simple, like f(x) = x^2.", "Graph g(x) = f(x+4) - 5 and compare the two curves."],
    steps: [
      "Type f(x) = x^2 and g(x) = f(x + 4) - 5.",
      "Compare: g's vertex moved to (-4, -5) compared to f's vertex at (0, 0).",
      "This is a shift left 4 and down 5.",
    ],
  },
  {
    id: "transformations-4",
    categorySlug: "transformations",
    difficulty: "hard",
    responseType: "mcq",
    prompt:
      "If f(x) = x^2 and g(x) = -3f(x - 2) + 1, which statement describes the transformation from f to g?",
    choices: [
      "Shift right 2, vertically stretch by 3, reflect over the x-axis, shift up 1",
      "Shift left 2, vertically stretch by 3, reflect over the x-axis, shift up 1",
      "Shift right 2, vertically stretch by 3, no reflection, shift up 1",
      "Shift right 2, vertically shrink by 1/3, reflect over the x-axis, shift up 1",
    ],
    answer: "Shift right 2, vertically stretch by 3, reflect over the x-axis, shift up 1",
    hints: ["Graph f(x) = x^2 and g(x) = -3f(x-2)+1 together.", "Compare the vertex location, steepness, and direction of opening."],
    steps: [
      "Type f(x) = x^2 and g(x) = -3 f(x-2) + 1.",
      "g's vertex moved to (2, 1), it opens downward, and it's 3 times steeper than f.",
      "This matches: shift right 2, vertical stretch by 3, reflect over the x-axis, shift up 1.",
    ],
  },

  // ---------- sliders-parameters (more) ----------
  {
    id: "sliders-parameters-3",
    categorySlug: "sliders-parameters",
    difficulty: "medium",
    responseType: "grid-in",
    prompt: "The graph of y = ax + 5 passes through the point (3, 11). What is the value of a?",
    answer: "2",
    hints: ["Type y = a*x + 5 and add a slider for a.", "Drag the slider until the line passes through (3, 11)."],
    steps: [
      "Type y = a*x + 5 and add a slider for a.",
      "Plot the point (3, 11).",
      "Drag the slider until the line passes through it — this happens at a = 2.",
    ],
  },
  {
    id: "sliders-parameters-4",
    categorySlug: "sliders-parameters",
    difficulty: "hard",
    responseType: "grid-in",
    prompt: "The function f(x) = x^2 + bx - 5 has roots at x = -1 and x = 5. What is the value of b?",
    answer: "-4",
    hints: ["Type y = x^2 + b*x - 5 and add a slider for b.", "Drag until the graph crosses the x-axis at both -1 and 5."],
    steps: [
      "Type y = x^2 + b*x - 5 and add a slider for b.",
      "Drag the slider until the graph crosses the x-axis at both x = -1 and x = 5.",
      "This occurs at b = -4.",
    ],
  },

  // ---------- trig-basics (more) ----------
  {
    id: "trig-basics-3",
    categorySlug: "trig-basics",
    difficulty: "easy",
    responseType: "mcq",
    prompt: "What is the amplitude and period of y = 5sin(3x)?",
    choices: [
      "Amplitude 5, period 2π/3",
      "Amplitude 3, period 2π/5",
      "Amplitude 5, period 2π",
      "Amplitude 15, period 2π/3",
    ],
    answer: "Amplitude 5, period 2π/3",
    hints: ["Trace the curve to find the max height.", "Measure the distance between consecutive peaks."],
    steps: [
      "Type y = 5sin(3x).",
      "Trace the curve: the max height is 5, so the amplitude is 5.",
      "The distance between consecutive peaks is 2π/3, so the period is 2π/3.",
    ],
  },
  {
    id: "trig-basics-4",
    categorySlug: "trig-basics",
    difficulty: "medium",
    responseType: "grid-in",
    prompt: "The function h(t) = 2cos((π/4)t) + 6 models a height in meters. What is the maximum height reached?",
    answer: "8",
    hints: ["Graph the function.", "Click on the highest point of the curve."],
    steps: ["Type y = 2cos((π/4)x) + 6.", "Click the highest point — Desmos shows the maximum y-value is 8."],
  },

  // ---------- backsolving (more) ----------
  {
    id: "backsolving-3",
    categorySlug: "backsolving",
    difficulty: "medium",
    responseType: "mcq",
    prompt: "If 4(x + 2) - 3 = 2x + 9, which value of x satisfies the equation?",
    choices: ["2", "1", "5", "-2"],
    answer: "2",
    hints: ["Graph the left and right sides as two separate functions.", "Click where the two graphs intersect."],
    steps: ["Type y = 4(x + 2) - 3.", "Type y = 2x + 9.", "Click the intersection — Desmos shows x = 2."],
  },
  {
    id: "backsolving-4",
    categorySlug: "backsolving",
    difficulty: "hard",
    responseType: "mcq",
    prompt: "Which value of x is a solution to the equation sqrt(3x + 1) = x - 1?",
    choices: ["5", "0", "-5", "1"],
    answer: "5",
    hints: ["Graph y = sqrt(3x + 1) and y = x - 1 separately.", "Double-check any solution by substituting back in, since radical equations can produce extraneous solutions."],
    steps: [
      "Type y = sqrt(3x + 1).",
      "Type y = x - 1.",
      "Click the intersection — Desmos shows x = 5.",
      "Check: sqrt(16) = 4, and 5 - 1 = 4. It checks out (x = 0 would be extraneous, since sqrt(1) = 1 ≠ -1).",
    ],
  },

  // ---------- equivalent-expressions ----------
  {
    id: "equivalent-expressions-1",
    categorySlug: "equivalent-expressions",
    difficulty: "easy",
    responseType: "mcq",
    prompt: "Which expression is equivalent to (x + 3)^2 - 9?",
    choices: ["x^2 + 6x", "x^2 + 9", "x^2 - 9", "x^2 + 6x + 9"],
    answer: "x^2 + 6x",
    hints: [
      "Graph y = (x + 3)^2 - 9 and graph each answer choice as its own function.",
      "The graph that sits exactly on top of the original is the equivalent one.",
    ],
    steps: [
      "Type y1 = (x + 3)^2 - 9.",
      "Type y2 = x^2 + 6x on the next line.",
      "The two graphs overlap completely — only one curve is visible — confirming they're equivalent.",
    ],
  },
  {
    id: "equivalent-expressions-2",
    categorySlug: "equivalent-expressions",
    difficulty: "medium",
    responseType: "mcq",
    prompt: "Which expression is equivalent to (2x - 1)(x + 4)?",
    choices: ["2x^2 + 7x - 4", "2x^2 - 7x - 4", "2x^2 + 7x + 4", "2x^2 - 9x - 4"],
    answer: "2x^2 + 7x - 4",
    hints: [
      "Graph the product as written and graph each choice separately.",
      "Or graph (original) - (choice) and look for the flat line y = 0.",
    ],
    steps: [
      "Type y = (2x - 1)(x + 4) - (2x^2 + 7x - 4).",
      "The graph is the flat line y = 0 for every x, confirming the expressions are equivalent.",
    ],
  },
  {
    id: "equivalent-expressions-3",
    categorySlug: "equivalent-expressions",
    difficulty: "medium",
    responseType: "grid-in",
    prompt: "For which value of k is 3(x + 2) + 5 equivalent to 3x + k for all x?",
    answer: "11",
    hints: [
      "Graph y = 3(x + 2) + 5 and y = 3x + k with a slider for k.",
      "Drag k until the two graphs become a single overlapping curve.",
    ],
    steps: [
      "Type y = 3(x + 2) + 5 and y = 3x + k, adding a slider for k.",
      "Drag k until the lines perfectly overlap — this happens at k = 11.",
    ],
  },
  {
    id: "equivalent-expressions-4",
    categorySlug: "equivalent-expressions",
    difficulty: "hard",
    responseType: "mcq",
    prompt: "Which expression is equivalent to (x^2 - 9)/(x - 3) for x ≠ 3?",
    choices: ["x + 3", "x - 3", "x + 9", "x - 9"],
    answer: "x + 3",
    hints: [
      "Graph y = (x^2 - 9)/(x - 3) — notice the tiny hole in the curve at x = 3.",
      "Graph each choice and see which one lands exactly on top of that curve.",
    ],
    steps: [
      "Type y = (x^2 - 9)/(x - 3).",
      "Type y = x + 3 on the next line.",
      "The graphs overlap everywhere except the hole at x = 3, confirming equivalence.",
    ],
  },
  {
    id: "equivalent-expressions-5",
    categorySlug: "equivalent-expressions",
    difficulty: "hard",
    responseType: "grid-in",
    prompt:
      "If (x + a)^2 + b is equivalent to x^2 + 8x + 10 for all x, what is the value of a + b?",
    answer: "-2",
    hints: [
      "Graph y = x^2 + 8x + 10, and graph y = (x + a)^2 + b with sliders for a and b.",
      "Drag the sliders until the second graph exactly overlaps the first.",
    ],
    steps: [
      "Type y = x^2 + 8x + 10 and y = (x + a)^2 + b, adding sliders for a and b.",
      "Drag until the graphs overlap exactly — this happens at a = 4 and b = -6.",
      "a + b = 4 + (-6) = -2.",
    ],
  },

  // ---------- number-of-solutions ----------
  {
    id: "number-of-solutions-1",
    categorySlug: "number-of-solutions",
    difficulty: "easy",
    responseType: "mcq",
    prompt: "How many solutions does the system below have?\n\ny = 2x + 1\ny = 2x - 5",
    choices: ["0", "1", "2", "Infinitely many"],
    answer: "0",
    hints: ["Graph both lines.", "Parallel lines with different intercepts never cross."],
    steps: [
      "Type y = 2x + 1 and y = 2x - 5.",
      "Both lines have the same slope but different y-intercepts, so they're parallel and never intersect.",
      "The system has 0 solutions.",
    ],
  },
  {
    id: "number-of-solutions-2",
    categorySlug: "number-of-solutions",
    difficulty: "easy",
    responseType: "mcq",
    prompt: "How many solutions does the system below have?\n\ny = x - 4\ny = 2x - 4",
    choices: ["1", "0", "2", "Infinitely many"],
    answer: "1",
    hints: ["Graph both lines.", "Count how many times they cross."],
    steps: [
      "Type y = x - 4 and y = 2x - 4.",
      "The lines cross exactly once, at (0, -4).",
      "The system has exactly 1 solution.",
    ],
  },
  {
    id: "number-of-solutions-3",
    categorySlug: "number-of-solutions",
    difficulty: "medium",
    responseType: "mcq",
    prompt: "How many solutions does the system below have?\n\ny = 2x - 6\n4x - 2y = 12",
    choices: ["Infinitely many", "0", "1", "2"],
    answer: "Infinitely many",
    hints: ["Graph both equations exactly as given.", "Look closely — do you see one line or two?"],
    steps: [
      "Type y = 2x - 6 and 4x - 2y = 12.",
      "Only one line is visible — the second equation simplifies to the same line as the first.",
      "The system has infinitely many solutions.",
    ],
  },
  {
    id: "number-of-solutions-4",
    categorySlug: "number-of-solutions",
    difficulty: "medium",
    responseType: "mcq",
    prompt: "How many solutions does the system below have?\n\ny = x^2 - 4\ny = 4",
    choices: ["2", "0", "1", "Infinitely many"],
    answer: "2",
    hints: ["Graph the parabola and the horizontal line.", "Count the intersection points."],
    steps: [
      "Type y = x^2 - 4 and y = 4.",
      "The line crosses the parabola at two points.",
      "The system has 2 solutions.",
    ],
  },
  {
    id: "number-of-solutions-5",
    categorySlug: "number-of-solutions",
    difficulty: "hard",
    responseType: "mcq",
    prompt: "How many real solutions does the system below have?\n\ny = x^2 + 2x + 5\ny = 2x + 1",
    choices: ["0", "1", "2", "Infinitely many"],
    answer: "0",
    hints: ["Graph both.", "If the line never touches the parabola, zoom out to confirm before concluding."],
    steps: [
      "Type y = x^2 + 2x + 5 and y = 2x + 1.",
      "The parabola stays entirely above the line for every x — they never touch, even zoomed out.",
      "The system has 0 real solutions.",
    ],
  },

  // ---------- solve-in-terms-of ----------
  {
    id: "solve-in-terms-of-1",
    categorySlug: "solve-in-terms-of",
    difficulty: "easy",
    responseType: "grid-in",
    prompt: "Given y = 3x - 7, what is the value of x when y = 11?",
    answer: "6",
    hints: ["Graph y = 3x - 7 and y = 11.", "Click the intersection and read the x-value."],
    steps: ["Type y = 3x - 7.", "Type y = 11.", "Click the intersection — Desmos shows x = 6."],
  },
  {
    id: "solve-in-terms-of-2",
    categorySlug: "solve-in-terms-of",
    difficulty: "medium",
    responseType: "grid-in",
    prompt: "Given the equation 2x + 5y = 20, what is the value of y when x = 10?",
    answer: "0",
    hints: [
      "Type the equation exactly as given — no need to solve for y first.",
      "Graph x = 10 as a vertical line and click the intersection.",
    ],
    steps: [
      "Type 2x + 5y = 20.",
      "Type x = 10.",
      "Click the intersection — Desmos shows y = 0.",
    ],
  },
  {
    id: "solve-in-terms-of-3",
    categorySlug: "solve-in-terms-of",
    difficulty: "medium",
    responseType: "grid-in",
    prompt:
      "The formula F = (9/5)C + 32 converts Celsius to Fahrenheit. What is C when F = 68?",
    answer: "20",
    hints: ["Graph the formula and a horizontal line at the known F-value.", "Click the intersection and read C."],
    steps: [
      "Type y = (9/5)x + 32, using x for C and y for F.",
      "Type y = 68.",
      "Click the intersection — Desmos shows x = 20, so C = 20.",
    ],
  },
  {
    id: "solve-in-terms-of-4",
    categorySlug: "solve-in-terms-of",
    difficulty: "hard",
    responseType: "grid-in",
    prompt:
      "A formula is given by A = 500(1 + r)^2. If A = 720, what is the positive value of r?",
    answer: "0.2",
    hints: [
      "Graph y = 500(1 + r)^2 with a slider for r, and graph y = 720.",
      "Drag the slider until the curve crosses 720 at a positive r.",
    ],
    steps: [
      "Type y = 500(1 + r)^2 with a slider for r, and y = 720.",
      "Drag r until the two graphs meet — this happens at r = 0.2 (the other solution, r = -2.2, isn't positive).",
    ],
  },
  {
    id: "solve-in-terms-of-5",
    categorySlug: "solve-in-terms-of",
    difficulty: "hard",
    responseType: "grid-in",
    prompt: "The equation xy - 3x = 12 - y is given. What is the value of y when x = 3?",
    answer: "5.25",
    hints: [
      "Type the equation exactly as given, with x = 3 substituted, or graph it implicitly and intersect with x = 3.",
    ],
    steps: [
      "Type xy - 3x = 12 - y directly (Desmos handles implicit equations in x and y).",
      "Type x = 3 as a vertical line.",
      "Click the intersection — Desmos shows y = 5.25.",
    ],
  },

  // ---------- polynomial-intersections ----------
  {
    id: "polynomial-intersections-1",
    categorySlug: "polynomial-intersections",
    difficulty: "medium",
    responseType: "mcq",
    prompt: "What are the points of intersection of y = x^2 and y = x + 2?",
    choices: [
      "(2, 4) and (-1, 1)",
      "(2, 4) and (1, 1)",
      "(-2, 4) and (1, 1)",
      "(2, -4) and (-1, -1)",
    ],
    answer: "(2, 4) and (-1, 1)",
    hints: ["Graph both.", "Click each intersection point."],
    steps: [
      "Type y = x^2 and y = x + 2.",
      "Click both intersections — Desmos shows (2, 4) and (-1, 1).",
    ],
  },
  {
    id: "polynomial-intersections-2",
    categorySlug: "polynomial-intersections",
    difficulty: "medium",
    responseType: "grid-in",
    prompt: "At how many points do y = x^3 and y = x intersect?",
    answer: "3",
    hints: ["Graph both.", "Count every crossing — zoom out if needed."],
    steps: [
      "Type y = x^3 and y = x.",
      "Click each intersection — Desmos shows (-1, -1), (0, 0), and (1, 1).",
      "There are 3 intersection points.",
    ],
  },
  {
    id: "polynomial-intersections-3",
    categorySlug: "polynomial-intersections",
    difficulty: "hard",
    responseType: "grid-in",
    prompt: "What is the sum of all x-coordinates where y = x^3 - 3x and y = x intersect?",
    answer: "0",
    hints: ["Graph both.", "Add up the x-values of every intersection point."],
    steps: [
      "Type y = x^3 - 3x and y = x.",
      "Click each intersection — Desmos shows x = -2, x = 0, and x = 2.",
      "Sum: -2 + 0 + 2 = 0.",
    ],
  },
  {
    id: "polynomial-intersections-4",
    categorySlug: "polynomial-intersections",
    difficulty: "hard",
    responseType: "mcq",
    prompt: "Which of the following is a point of intersection of y = x^2 - 1 and y = -x^2 + 7?",
    choices: ["(2, 3)", "(2, -3)", "(4, 3)", "(-2, -3)"],
    answer: "(2, 3)",
    hints: ["Graph both.", "Click each intersection point."],
    steps: [
      "Type y = x^2 - 1 and y = -x^2 + 7.",
      "Click the intersections — Desmos shows (2, 3) and (-2, 3).",
    ],
  },
  {
    id: "polynomial-intersections-5",
    categorySlug: "polynomial-intersections",
    difficulty: "hard",
    responseType: "grid-in",
    prompt:
      "The graphs of y = x^3 - 6x^2 + 9x and y = x intersect at three points. What is the sum of the y-coordinates of those points?",
    answer: "6",
    hints: ["Graph both.", "Find each intersection point's y-value and add them up."],
    steps: [
      "Type y = x^3 - 6x^2 + 9x and y = x.",
      "Click each intersection — Desmos shows (0, 0), (2, 2), and (4, 4).",
      "Sum of y-coordinates: 0 + 2 + 4 = 6.",
    ],
  },

  // ---------- statistics-lists ----------
  {
    id: "statistics-lists-1",
    categorySlug: "statistics-lists",
    difficulty: "easy",
    responseType: "grid-in",
    prompt: "What is the mean of the data set {12, 15, 18, 9, 21, 15}?",
    answer: "15",
    hints: ["Type the data as a list using curly braces.", "Use the built-in mean() function."],
    steps: ["Type L = {12, 15, 18, 9, 21, 15}.", "Type mean(L).", "Desmos evaluates this to 15."],
  },
  {
    id: "statistics-lists-2",
    categorySlug: "statistics-lists",
    difficulty: "easy",
    responseType: "grid-in",
    prompt: "What is the median of the data set {4, 9, 2, 8, 5, 2, 7}?",
    answer: "5",
    hints: ["Type the data as a list.", "Use the built-in median() function."],
    steps: ["Type L = {4, 9, 2, 8, 5, 2, 7}.", "Type median(L).", "Desmos evaluates this to 5."],
  },
  {
    id: "statistics-lists-3",
    categorySlug: "statistics-lists",
    difficulty: "medium",
    responseType: "grid-in",
    prompt: "What is the range of the data set {23, 19, 31, 27, 15, 33}?",
    answer: "18",
    hints: ["There's no built-in range function.", "Type max(list) - min(list) directly."],
    steps: [
      "Type L = {23, 19, 31, 27, 15, 33}.",
      "Type max(L) - min(L).",
      "Desmos evaluates this to 33 - 15 = 18.",
    ],
  },
  {
    id: "statistics-lists-4",
    categorySlug: "statistics-lists",
    difficulty: "medium",
    responseType: "grid-in",
    prompt: "What is the median of the data set {8, 12, 4, 16, 10, 6, 14}?",
    answer: "10",
    hints: ["Type the data as a list.", "Use the built-in median() function."],
    steps: ["Type L = {8, 12, 4, 16, 10, 6, 14}.", "Type median(L).", "Desmos evaluates this to 10."],
  },
  {
    id: "statistics-lists-5",
    categorySlug: "statistics-lists",
    difficulty: "hard",
    responseType: "grid-in",
    prompt: "What is the mean of the data set {5, 8, 8, 10, 12, 12, 12, 15}?",
    answer: "10.25",
    hints: ["Type the data as a list.", "Use the built-in mean() function."],
    steps: ["Type L = {5, 8, 8, 10, 12, 12, 12, 15}.", "Type mean(L).", "Desmos evaluates this to 10.25."],
  },

  // ---------- percentages ----------
  {
    id: "percentages-1",
    categorySlug: "percentages",
    difficulty: "easy",
    responseType: "grid-in",
    prompt: "What is 35% of 180?",
    answer: "63",
    hints: ["Type the percent directly as a decimal multiplication."],
    steps: ["Type 0.35*180.", "Desmos evaluates this to 63."],
  },
  {
    id: "percentages-2",
    categorySlug: "percentages",
    difficulty: "easy",
    responseType: "grid-in",
    prompt: "A shirt's price increased from $40 to $52. What is the percent increase?",
    answer: "30",
    hints: ["Type the percent-change formula as one expression: (new - old)/old * 100."],
    steps: ["Type (52-40)/40*100.", "Desmos evaluates this to 30."],
  },
  {
    id: "percentages-3",
    categorySlug: "percentages",
    difficulty: "medium",
    responseType: "grid-in",
    prompt:
      "A $250 item is first increased in price by 20% and then decreased by 10%. What is the final price?",
    answer: "270",
    hints: ["Chain both percent changes in a single typed expression."],
    steps: ["Type 250*1.2*0.9.", "Desmos evaluates this to 270."],
  },
  {
    id: "percentages-4",
    categorySlug: "percentages",
    difficulty: "medium",
    responseType: "grid-in",
    prompt: "72 is what percent of 480?",
    answer: "15",
    hints: ["Type the ratio times 100 as one expression."],
    steps: ["Type 72/480*100.", "Desmos evaluates this to 15."],
  },
  {
    id: "percentages-5",
    categorySlug: "percentages",
    difficulty: "hard",
    responseType: "grid-in",
    prompt: "After a 25% discount, a jacket costs $63. What was the original price?",
    answer: "84",
    hints: ["A 25% discount means the sale price is 75% of the original — divide, don't multiply."],
    steps: ["Type 63/0.75.", "Desmos evaluates this to 84."],
  },

  // ---------- special-angle-trig ----------
  {
    id: "special-angle-trig-1",
    categorySlug: "special-angle-trig",
    difficulty: "easy",
    responseType: "mcq",
    prompt: "In degree mode, what is sin(30°)?",
    choices: ["0.5", "1", "0.866", "0"],
    answer: "0.5",
    hints: ["Switch to degree mode using the settings wrench.", "Type sin(30) directly."],
    steps: ["Click the wrench icon and switch to Degrees.", "Type sin(30).", "Desmos evaluates this to 0.5."],
  },
  {
    id: "special-angle-trig-2",
    categorySlug: "special-angle-trig",
    difficulty: "easy",
    responseType: "mcq",
    prompt: "In radian mode, what is cos(π/3)?",
    choices: ["0.5", "0", "1", "0.707"],
    answer: "0.5",
    hints: ["Make sure Desmos is in radian mode.", "Type cos(pi/3) directly — pi is recognized automatically."],
    steps: ["Confirm radian mode in settings.", "Type cos(pi/3).", "Desmos evaluates this to 0.5."],
  },
  {
    id: "special-angle-trig-3",
    categorySlug: "special-angle-trig",
    difficulty: "medium",
    responseType: "grid-in",
    prompt: "In degree mode, what is tan(45°)?",
    answer: "1",
    hints: ["Switch to degree mode.", "Type tan(45) directly."],
    steps: ["Click the wrench icon and switch to Degrees.", "Type tan(45).", "Desmos evaluates this to 1."],
  },
  {
    id: "special-angle-trig-4",
    categorySlug: "special-angle-trig",
    difficulty: "medium",
    responseType: "mcq",
    prompt: "What is the exact value of sin(60°)?",
    choices: ["√3/2", "1/2", "√2/2", "1"],
    answer: "√3/2",
    hints: ["Switch to degree mode and type sin(60) to get a decimal.", "Compare the decimal to √3/2 ≈ 0.866."],
    steps: [
      "Type sin(60) in degree mode — Desmos shows approximately 0.866.",
      "Type sqrt(3)/2 — it also evaluates to approximately 0.866, confirming the exact value.",
    ],
  },
  {
    id: "special-angle-trig-5",
    categorySlug: "special-angle-trig",
    difficulty: "hard",
    responseType: "grid-in",
    prompt: "If sin(θ) = √2/2 and 0° < θ < 90°, what is θ in degrees?",
    answer: "45",
    hints: ["Switch to degree mode.", "Use the inverse sine function: arcsin(sqrt(2)/2)."],
    steps: [
      "Switch to degree mode.",
      "Type arcsin(sqrt(2)/2).",
      "Desmos evaluates this to 45.",
    ],
  },
];

export function getQuestionsByCategory(categorySlug: string): Question[] {
  return questions.filter((q) => q.categorySlug === categorySlug);
}

export function getQuestion(id: string): Question | undefined {
  return questions.find((q) => q.id === id);
}
