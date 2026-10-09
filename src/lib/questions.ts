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
];

export function getQuestionsByCategory(categorySlug: string): Question[] {
  return questions.filter((q) => q.categorySlug === categorySlug);
}

export function getQuestion(id: string): Question | undefined {
  return questions.find((q) => q.id === id);
}
