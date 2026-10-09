import { notFound } from "next/navigation";
import { getCategory } from "@/lib/categories";
import { getQuestion, getQuestionsByCategory, questions } from "@/lib/questions";
import { PracticeClient } from "@/components/practice-client";

export function generateStaticParams() {
  return questions.map((q) => ({ slug: q.categorySlug, questionId: q.id }));
}

export default async function PracticePage({
  params,
}: PageProps<"/practice/[slug]/[questionId]">) {
  const { slug, questionId } = await params;
  const category = getCategory(slug);
  const question = getQuestion(questionId);

  if (!category || !question || question.categorySlug !== slug) notFound();

  const categoryQuestions = getQuestionsByCategory(slug);

  return (
    <PracticeClient
      category={category}
      question={question}
      categoryQuestions={categoryQuestions}
    />
  );
}
