"use client";

import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/shared/layout/language-switcher";
import { SegmentSwitcher } from "@/shared/layout/segment-switcher";
import { useTranslations } from "next-intl";

import { Button } from "@/shared/components/ui/button";

interface FiveGShellProps {
  children: React.ReactNode;
}

export function FiveGShell({ children }: FiveGShellProps) {
  const t = useTranslations("common");
  const tPage = useTranslations("pages.fiveGMobifone");

  return (
    <>
    </>
    // <div className="flex min-h-screen flex-col bg-gradient-to-b from-zinc-900 via-zinc-900 to-green-950 text-white">
    //   <header className="border-b border-white/10">
    //     <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
    //       <Link href="/" className="text-xl font-bold text-green-400">
    //         {t("logo")} 5G
    //       </Link>

    //       <div className="flex items-center gap-2">
    //         <SegmentSwitcher />
    //         <Button
    //           variant="ghost"
    //           size="sm"
    //           className="text-white hover:bg-white/10 hover:text-white"
    //           asChild
    //         >
    //           <Link href="/auth/login">{t("login")}</Link>
    //         </Button>
    //         <LanguageSwitcher />
    //       </div>
    //     </div>
    //   </header>

    //   <div className="border-b border-white/10 bg-green-600/20 py-8">
    //     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    //       <p className="text-sm font-medium tracking-widest text-green-300 uppercase">
    //         5G
    //       </p>
    //       <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
    //         {tPage("hero")}
    //       </h1>
    //     </div>
    //   </div>

    //   <main className="flex-1">{children}</main>

    //   <footer className="border-t border-white/10 py-6 text-center text-sm text-zinc-400">
    //     © Mobifone 5G
    //   </footer>
    // </div>
  );
}
