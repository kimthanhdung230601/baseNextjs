"use client";

import { useEffect, useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/common";
import { setAuthCookies } from "@/features/auth/lib/cookie";
import { loginApi } from "@/services/auth.service";
import { UserRole } from "@/types/enums/auth";
import type { LoginRequest } from "@/types/interfaces/auth";

export default function useLogin() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [payload, setPayload] = useState<LoginRequest | null>(null);

  const { data, error, isFetching, isError, isSuccess } = useQuery({
    queryKey: payload
      ? [...QUERY_KEYS.AUTH.LOGIN, payload.usernameOrEmail]
      : QUERY_KEYS.AUTH.LOGIN,
    queryFn: () => loginApi(payload!),
    enabled: !!payload,
    retry: false,
  });

  useEffect(() => {
    if (!isSuccess || !data?.data) return;

    setAuthCookies(data.data);
    queryClient.invalidateQueries({ queryKey: QUERY_KEYS.AUTH.PROFILE });

    if (data.data.user.role === UserRole.ADMIN) {
      router.push("/admin");
    } else {
      router.push("/");
    }

    setPayload(null);
    queryClient.removeQueries({ queryKey: QUERY_KEYS.AUTH.LOGIN });
  }, [isSuccess, data, queryClient, router]);

  const login = (values: LoginRequest) => {
    setPayload(values);
  };

  return {
    login,
    isPending: isFetching,
    error,
    isError,
  };
}
