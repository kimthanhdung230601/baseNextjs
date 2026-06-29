import { BreadcrumbSegment } from "@/types/interfaces/navigation";

import MbfBreadcrumbs from "../components/breadcrumbs";

interface PageContentProps {
  title: string;
  description: string;
  breadcrumbSegments?: BreadcrumbSegment[]; // nếu page ko có breadcrumbs thì ko truyền prop này
  children?: React.ReactNode;
}

export default function PageContent({
  title,
  description,
  breadcrumbSegments,
  children,
}: PageContentProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {!!breadcrumbSegments && (
        <div className="mb-4">
          <MbfBreadcrumbs segments={breadcrumbSegments} />
        </div>
      )}
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        {title}
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
      <div className="mt-8">{children}</div>
    </section>
  );
}
