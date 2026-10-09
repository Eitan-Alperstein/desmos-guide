export interface RankTier {
  name: string;
  minPercent: number;
  description: string;
}

export const rankTiers: RankTier[] = [
  { name: "Blank Graph", minPercent: 0, description: "Every journey starts with an empty grid." },
  { name: "First Plot", minPercent: 1, description: "You've started clicking intersections." },
  { name: "Grapher", minPercent: 25, description: "Comfortable graphing most equation types." },
  { name: "Power User", minPercent: 50, description: "Sliders, tables, and regressions feel natural." },
  { name: "Desmos Pro", minPercent: 75, description: "Few question types left to master." },
  { name: "Desmos Master", minPercent: 100, description: "Every category solved at least once." },
];

export function getRank(percent: number): RankTier {
  let current = rankTiers[0];
  for (const tier of rankTiers) {
    if (percent >= tier.minPercent) current = tier;
  }
  return current;
}

export function getNextRank(percent: number): RankTier | null {
  for (const tier of rankTiers) {
    if (percent < tier.minPercent) return tier;
  }
  return null;
}
