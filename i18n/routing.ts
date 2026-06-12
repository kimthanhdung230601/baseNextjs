import { defineRouting } from "next-intl/routing";

import { Locale } from "@/types/enums/locale";

export const routing = defineRouting({
  locales: [Locale.VI, Locale.EN],
  defaultLocale: Locale.VI,
  localePrefix: "always",
});
