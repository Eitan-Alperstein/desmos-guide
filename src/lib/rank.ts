export interface RankTier {
  name: string;
  minPercent: number;
  description: string;
  color: string;
  textColor: string;
}

export const rankTiers: RankTier[] = [
  {
    name: "Iron",
    minPercent: 0,
    description: "Every journey starts with an empty grid.",
    color: "#8b92a0",
    textColor: "#ffffff",
  },
  {
    name: "Bronze",
    minPercent: 8,
    description: "You've started clicking intersections.",
    color: "#b4703a",
    textColor: "#ffffff",
  },
  {
    name: "Silver",
    minPercent: 20,
    description: "Comfortable graphing the basics.",
    color: "#aeb4bd",
    textColor: "#1f2430",
  },
  {
    name: "Gold",
    minPercent: 35,
    description: "Sliders and tables feel natural.",
    color: "#e0b528",
    textColor: "#4a3700",
  },
  {
    name: "Platinum",
    minPercent: 50,
    description: "Regressions and systems are second nature.",
    color: "#7fd6e0",
    textColor: "#0d3a40",
  },
  {
    name: "Ruby",
    minPercent: 65,
    description: "Few question types left to master.",
    color: "#d13b63",
    textColor: "#ffffff",
  },
  {
    name: "Diamond",
    minPercent: 82,
    description: "Elite command of every Desmos trick.",
    color: "#5bc3f0",
    textColor: "#07313f",
  },
  {
    name: "Bedrock",
    minPercent: 100,
    description: "Every category solved. Nothing left to learn.",
    color: "#1e2430",
    textColor: "#ffffff",
  },
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
