import { FiveGShell } from "@/components/layout/five-g-shell";

interface FiveGMobifoneLayoutProps {
  children: React.ReactNode;
}

export default function FiveGMobifoneLayout({
  children,
}: FiveGMobifoneLayoutProps) {
  return <FiveGShell>{children}</FiveGShell>;
}
