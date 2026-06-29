"use client";

import type { ComponentPropsWithoutRef } from "react";
import { forwardRef, useState } from "react";
import configs from "@/constants/config";
import {
  BUSINESS_NAVIGATION,
  PERSONAL_NAVIGATION,
} from "@/constants/navigation";
import { Link, usePathname } from "@/i18n/navigation";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

import { Segment } from "@/types/enums/segment";
import type { NavigationItem } from "@/types/interfaces/navigation";
import { cn } from "@/lib/utils/index";

interface SubHeaderProps {
  segment?: Segment;
}

export function SubHeader({ segment }: SubHeaderProps) {
  const t = useTranslations("subHeader");
  const pathname = usePathname();
  const activeSegment =
    segment ??
    (pathname.includes(configs.BUSINESS_PATH_SEGMENT)
      ? Segment.BUSINESS
      : Segment.PERSONAL);
  const navigation =
    activeSegment === Segment.BUSINESS
      ? BUSINESS_NAVIGATION
      : PERSONAL_NAVIGATION;

  return (
    <nav className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-1 py-2">
          {navigation.items.map((item) => (
            <SubHeaderItem
              key={item.key}
              item={item}
              label={t(item.key)}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}

interface SubHeaderItemProps {
  item: NavigationItem;
  label: string;
}

interface SubHeaderLinkProps
  extends Omit<ComponentPropsWithoutRef<"a">, "href"> {
  href: string;
  isExternal?: boolean;
}

const SubHeaderLink = forwardRef<HTMLAnchorElement, SubHeaderLinkProps>(
  ({ href, isExternal, rel, target, ...props }, ref) => {
    if (isExternal) {
      return (
        <a
          ref={ref}
          href={href}
          target={target ?? "_blank"}
          rel={rel ?? "noopener noreferrer"}
          {...props}
        />
      );
    }

    return <Link ref={ref} href={href} {...props} />;
  }
);

SubHeaderLink.displayName = "SubHeaderLink";

function SubHeaderItem({ item, label }: SubHeaderItemProps) {
  const t = useTranslations("subHeader");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (item.layout === "grid" && item.children?.length) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button className="flex cursor-pointer items-center gap-1 rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800">
          {label}
          <ChevronDown
            className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
          />
        </button>
        {open ? (
          <div className="absolute left-0 top-full z-50 w-max min-w-[760px] max-w-[calc(100vw-2rem)] rounded-md border border-zinc-200 bg-white p-4 text-zinc-950 shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50">
            <div className="grid grid-cols-3 gap-8">
              {item.children.map((column) => (
                <div key={column.key}>
                  <h3 className="mb-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {t(column.key)}
                  </h3>
                  <ul className="space-y-2">
                    {column.items?.map((subItem) => (
                      <li key={subItem.key}>
                        {subItem.href ? (
                          <SubHeaderLink
                            href={subItem.href}
                            isExternal={subItem.isExternal}
                            className={cn(
                              "text-sm text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200",
                              pathname === subItem.href &&
                                "font-medium text-green-700 dark:text-green-400"
                            )}
                          >
                            {t(subItem.label)}
                          </SubHeaderLink>
                        ) : (
                          <span className="text-sm text-zinc-700 dark:text-zinc-400">
                            {t(subItem.label)}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    );
  }

  if (item.children?.length) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button className="flex cursor-pointer items-center gap-1 rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800">
          {label}
          <ChevronDown
            className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
          />
        </button>
        {open ? (
          <div className="absolute left-0 top-full z-50 w-max min-w-[320px] max-w-[calc(100vw-2rem)] rounded-md border border-zinc-200 bg-white p-1 text-zinc-950 shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50">
            {item.href ? (
              <>
                <SubHeaderLink
                  href={item.href}
                  isExternal={item.isExternal}
                  className={cn(
                    "block rounded-sm px-2 py-1.5 text-sm cursor-pointer",
                    pathname === item.href &&
                      "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400"
                  )}
                >
                  {label}
                </SubHeaderLink>
                <div className="my-1 border-b border-zinc-200 dark:border-zinc-800" />
              </>
            ) : null}
            <div className="space-y-1">
              {item.children.map((child) =>
                child.href ? (
                  <SubHeaderLink
                    key={child.key}
                    href={child.href}
                    isExternal={child.isExternal}
                    className={cn(
                      "block rounded-sm px-2 py-1.5 text-sm text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200",
                      pathname === child.href &&
                        "bg-green-50 font-medium text-green-700 dark:bg-green-950 dark:text-green-400"
                    )}
                  >
                    {t(child.key)}
                  </SubHeaderLink>
                ) : null
              )}
            </div>
          </div>
        ) : null}
      </div>
    );
  }

  if (!item.href) {
    return null;
  }

  return (
    <SubHeaderLink
      href={item.href}
      isExternal={item.isExternal}
      className={cn(
        "rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800",
        pathname === item.href &&
          "bg-green-50 font-medium text-green-700 dark:bg-green-950 dark:text-green-400"
      )}
    >
      {label}
    </SubHeaderLink>
  );
}
