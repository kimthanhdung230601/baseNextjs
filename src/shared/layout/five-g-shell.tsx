import { ReactNode } from "react";

interface IFiveGShellProps {
  children: ReactNode;
}

export default function FiveGShell({ children }: IFiveGShellProps) {
  return <>{children}</>;
}
