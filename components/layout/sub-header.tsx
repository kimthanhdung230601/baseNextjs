"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import {
  BUSINESS_NAVIGATION,
  PERSONAL_NAVIGATION,
} from "@/constants/navigation";
import { getSegmentFromPathname } from "@/lib/navigation";
import type { NavigationItem } from "@/types/interfaces/navigation";
import { Segment } from "@/types/enums/segment";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils/index";

interface SubHeaderProps {
  segment?: Segment;
}

export function SubHeader({ segment }: SubHeaderProps) {
  const t = useTranslations("subHeader");
  const pathname = usePathname();
  const activeSegment = segment ?? getSegmentFromPathname(pathname);
  const navigation =
    activeSegment === Segment.BUSINESS
      ? BUSINESS_NAVIGATION
      : PERSONAL_NAVIGATION;

  return (
    <nav className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <NavigationMenu className="max-w-none justify-start">
          <NavigationMenuList className="flex-wrap justify-start gap-1 py-2">
            {navigation.items.map((item) => (
              <SubHeaderItem key={item.key} item={item} label={t(item.key)} />
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}

interface SubHeaderItemProps {
  item: NavigationItem;
  label: string;
}

function SubHeaderItem({ item, label }: SubHeaderItemProps) {
  const t = useTranslations("subHeader");
  const pathname = usePathname();

  if (item.children?.length) {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[220px] gap-1 p-2">
            {item.href ? (
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800",
                      pathname === item.href &&
                        "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400",
                    )}
                  >
                    {label}
                  </Link>
                </NavigationMenuLink>
              </li>
            ) : null}
            {item.children.map((child) => (
              <li key={child.key}>
                <NavigationMenuLink asChild>
                  <Link
                    href={child.href}
                    className={cn(
                      "block rounded-md px-3 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800",
                      pathname === child.href &&
                        "bg-green-50 font-medium text-green-700 dark:bg-green-950 dark:text-green-400",
                    )}
                  >
                    {t(child.key)}
                  </Link>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  if (!item.href) {
    return null;
  }

  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link
          href={item.href}
          className={cn(
            navigationMenuTriggerStyle(),
            pathname === item.href &&
              "bg-green-50 font-medium text-green-700 dark:bg-green-950 dark:text-green-400",
          )}
        >
          {label}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
