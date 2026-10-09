export type Difficulty = "easy" | "medium" | "hard";

export type ResponseType = "mcq" | "grid-in";

export interface Category {
  slug: string;
  title: string;
  shortDescription: string;
  trick: string;
  syntaxTips: string[];
}

export interface Question {
  id: string;
  categorySlug: string;
  difficulty: Difficulty;
  responseType: ResponseType;
  prompt: string;
  choices?: string[];
  answer: string;
  acceptableAnswers?: string[];
  hints: string[];
  steps: string[];
}
