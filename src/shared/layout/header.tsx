"use client";

import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "@/shared/layout/language-switcher";
import SegmentSwitcher from "@/shared/layout/segment-switcher";
import { useTranslations } from "next-intl";

import { Button } from "@/shared/components/ui/button";
import ThemeToggle from "../components/theme-toggle";
import configs from "@/constants/config";

export default function Header() {
  const t = useTranslations("common");

  return (
    <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={configs.BASE_PATH} className="text-xl font-bold text-green-600">
          {t("logo")}
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <SegmentSwitcher />
          <Button variant="ghost" size="sm" asChild>
            <Link href="/auth/login">{t("login")}</Link>
          </Button>
          <Button
            size="sm"
            className="bg-green-600 text-white hover:bg-green-700"
            asChild
          >
            <Link href="/auth/register">{t("register")}</Link>
          </Button>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
