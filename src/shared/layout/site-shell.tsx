"use client";

import { usePathname } from "@/i18n/navigation";
import Footer from "@/shared/layout/footer";
import Header from "@/shared/layout/header";
import SubHeader from "@/shared/layout/sub-header";

import { isAuthPath, isFiveGMobifonePath } from "@/lib/navigation";

interface SiteShellProps {
  children: React.ReactNode;
}

export default function SiteShell({ children }: SiteShellProps) {
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
