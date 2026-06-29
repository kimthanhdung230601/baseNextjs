import { ReactNode } from "react";

import FiveGShell from "@/shared/layout/five-g-shell";

interface FiveGMobifoneLayoutProps {
  children: ReactNode;
}

export default function FiveGMobifoneLayout({
  children,
}: FiveGMobifoneLayoutProps) {
  return <FiveGShell>{children}</FiveGShell>;
}
