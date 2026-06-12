"use client";

import { useTranslations } from "next-intl";
import { Phone } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">
            {t("about")}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {t("aboutDescription")}
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">
            {t("otherSupport")}
          </h3>
          <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>{t("contact")}</li>
            <li>{t("terms")}</li>
            <li>{t("privacy")}</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">
            {t("hotline")}
          </h3>
          <div className="flex items-center gap-2 text-green-600">
            <Phone className="size-4" />
            <span className="text-lg font-bold">{t("hotlineNumber")}</span>
          </div>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {t("hotlineDescription")}
          </p>
        </div>
      </div>
    </footer>
  );
}
