"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";
import { SessionProvider } from "next-auth/react";

export default function Provider({ children, ...props }: ThemeProviderProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (

    <QueryClientProvider client={queryClient}>
      <SessionProvider >
        <NextThemesProvider {...props}>{children}</NextThemesProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
}
