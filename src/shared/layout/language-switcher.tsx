"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { Button } from "@/shared/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";

import { Locale } from "@/types/enums/locale";

const LOCALE_LABELS = {
  [Locale.VI]: "Tiếng Việt",
  [Locale.EN]: "English",
} as const;

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (nextLocale: Locale) => {
    if (locale === nextLocale) {
      return;
    }

    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-1">
          {LOCALE_LABELS[locale as Locale]}
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLocaleChange(Locale.VI)}>
          {LOCALE_LABELS[Locale.VI]}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLocaleChange(Locale.EN)}>
          {LOCALE_LABELS[Locale.EN]}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
