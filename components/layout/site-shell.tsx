"use client";

import { usePathname } from "@/i18n/navigation";
import { isAuthPath, isFiveGMobifonePath } from "@/lib/navigation";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { SubHeader } from "@/components/layout/sub-header";

interface SiteShellProps {
  children: React.ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const isFiveGPage = isFiveGMobifonePath(pathname);
  const isAuthPage = isAuthPath(pathname);

  if (isFiveGPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {!isAuthPage && <SubHeader />}
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
