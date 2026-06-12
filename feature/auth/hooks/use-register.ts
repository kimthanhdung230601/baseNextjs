"use client";

import { useRouter } from "@/i18n/navigation";
import { useMutation } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/common";
import { registerApi } from "@/services/auth.service";
import type { RegisterRequest } from "@/types/interfaces/auth";

export function useRegister() {
  const router = useRouter();

  return useMutation({
    mutationKey: QUERY_KEYS.AUTH.REGISTER,
    mutationFn: (payload: RegisterRequest) => registerApi(payload),
    onSuccess: () => {
      router.push("/auth/login");
    },
  });
}
