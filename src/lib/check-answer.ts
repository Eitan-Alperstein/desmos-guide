function parseNumeric(input: string): number {
  const trimmed = input.trim();
  if (trimmed.includes("/")) {
    const [num, den] = trimmed.split("/");
    const n = parseFloat(num);
    const d = parseFloat(den);
    if (Number.isFinite(n) && Number.isFinite(d) && d !== 0) return n / d;
    return NaN;
  }
  return parseFloat(trimmed);
}

export function checkGridInAnswer(userInput: string, correctAnswer: string): boolean {
  const target = parseNumeric(correctAnswer);
  const guess = parseNumeric(userInput);
  if (Number.isNaN(target) || Number.isNaN(guess)) return false;
  return Math.abs(target - guess) < 1e-6;
}
