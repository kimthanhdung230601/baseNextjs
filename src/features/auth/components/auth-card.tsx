import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

import { cn } from "@/lib/utils/index";

interface AuthCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export default function AuthCard({
  title,
  description,
  children,
  footer,
  className,
}: AuthCardProps) {
  return (
    <Card className={cn("w-full max-w-md shadow-sm", className)}>
      <CardHeader className="space-y-2 text-center">
        <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          {title}
        </CardTitle>
        {description ? (
          <CardDescription className="text-base">{description}</CardDescription>
        ) : null}
      </CardHeader>
      <CardContent>{children}</CardContent>
      {footer ? (
        <CardFooter className="flex-col gap-3 border-t border-zinc-100 pt-6 dark:border-zinc-800">
          {footer}
        </CardFooter>
      ) : null}
    </Card>
  );
}
