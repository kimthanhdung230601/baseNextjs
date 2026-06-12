interface PageContentProps {
  title: string;
  description: string;
}

export function PageContent({ title, description }: PageContentProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        {title}
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </section>
  );
}
