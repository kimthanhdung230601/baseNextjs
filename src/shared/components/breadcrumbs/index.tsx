import { Fragment } from "react";
import configs from "@/constants/config";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import { BreadcrumbSegment } from "@/types/interfaces/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./related";

function resolveClickableIndex(segments: BreadcrumbSegment[]): number | null {
  if (segments.length <= 1) {
    return segments[0]?.href ? 0 : null;
  }

  for (let i = segments.length - 2; i >= 0; --i) {
    if (segments[i].href) {
      return i;
    }
  }

  return null;
}

export default function MbfBreadcrumbs({
  segments,
}: {
  segments: BreadcrumbSegment[];
}) {
  const t = useTranslations();

  if (!segments?.length) {
    return null;
  }

  const clickableIndex = resolveClickableIndex(segments);

  return (
    <Breadcrumb className="py-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={configs.BASE_PATH}>{t("common.home")}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;
          const isClickable = !isLast && clickableIndex === index;
          const label = segment.dynamicSegment
            ? segment.labelSource
            : t(segment.labelSource);

          return (
            <Fragment key={`${segment.labelSource}-${index}`}>
              {index > 0 && <BreadcrumbSeparator />}
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{label}</BreadcrumbPage>
                ) : isClickable && segment.href ? (
                  <BreadcrumbLink asChild>
                    <Link href={segment.href}>{label}</Link>
                  </BreadcrumbLink>
                ) : (
                  <span className="text-zinc-500 dark:text-zinc-400">
                    {label}
                  </span>
                )}
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
