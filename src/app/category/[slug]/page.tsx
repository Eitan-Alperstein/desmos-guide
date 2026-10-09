import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { categories, getCategory } from "@/lib/categories";
import { getQuestionsByCategory } from "@/lib/questions";
import { CategoryQuestionList } from "@/components/category-question-list";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({ params }: PageProps<"/category/[slug]">) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const categoryQuestions = getQuestionsByCategory(slug);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary">
        ← All categories
      </Link>

      <h1 className="mt-3 text-3xl font-semibold tracking-tight">{category.title}</h1>
      <p className="mt-2 text-muted-foreground">{category.shortDescription}</p>

      <Card className="mt-6 border border-primary/25 bg-accent/30">
        <CardContent className="pt-6">
          <p className="mb-3 text-sm font-semibold text-primary">The Desmos trick</p>
          <p className="text-sm leading-relaxed text-muted-foreground">{category.trick}</p>
          <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
            {category.syntaxTips.map((tip, i) => (
              <li key={i}>
                <code className="rounded bg-muted px-1 py-0.5 text-xs">{tip}</code>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="mt-8">
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Practice questions</h2>
        <CategoryQuestionList categorySlug={slug} questions={categoryQuestions} />
      </div>
    </div>
  );
}
