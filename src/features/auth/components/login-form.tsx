"use client";

import { useMemo } from "react";
import { MOCK_ACCOUNTS } from "@/constants/auth";
import AuthCard from "@/features/auth/components/auth-card";
import useLogin from "@/features/auth/hooks/use-login";
import { Link } from "@/i18n/navigation";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/shared/components/ui/alert";
import { Button } from "@/shared/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { Spinner } from "@/shared/components/ui/spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function LoginForm() {
  const t = useTranslations("auth.login");
  const tError = useTranslations("auth.error");
  const tValidation = useTranslations("auth.validation");
  const tCommon = useTranslations("common");
  const { login, isPending, error } = useLogin();

  const loginSchema = useMemo(
    () =>
      z.object({
        usernameOrEmail: z
          .string()
          .min(1, tValidation("usernameOrEmailRequired")),
        password: z.string().min(1, tValidation("passwordRequired")),
      }),
    [tValidation]
  );

  type LoginValues = z.infer<typeof loginSchema>;

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      usernameOrEmail: "",
      password: "",
    },
  });

  const handleSubmit = (values: LoginValues) => {
    login(values);
  };

  return (
    <AuthCard
      title={t("title")}
      description={t("description")}
      footer={
        <div className="flex w-full flex-col items-center gap-2 text-center text-sm text-zinc-600 dark:text-zinc-400">
          <Link
            href="/forgot-password"
            className="font-medium text-green-600 hover:text-green-700 hover:underline dark:text-green-400 dark:hover:text-green-300"
          >
            {t("forgotPassword")}
          </Link>
          <span>
            {t("noAccount")}{" "}
            <Link
              href="/auth/register"
              className="font-medium text-green-600 hover:text-green-700 hover:underline dark:text-green-400 dark:hover:text-green-300"
            >
              {tCommon("register")}
            </Link>
          </span>
        </div>
      }
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col gap-4"
          autoComplete="off"
        >
          {error ? (
            <Alert variant="destructive">
              <AlertTitle>{tError("title")}</AlertTitle>
              <AlertDescription>
                {error instanceof Error ? error.message : tError("loginFailed")}
              </AlertDescription>
            </Alert>
          ) : null}

          <FormField
            control={form.control}
            name="usernameOrEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("usernameOrEmail")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("usernameOrEmailPlaceholder")}
                    autoFocus
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("password")}</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder={t("passwordPlaceholder")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="mt-2 w-full bg-green-600 text-white hover:bg-green-700"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <Spinner className="text-white" />
                {t("submitting")}
              </>
            ) : (
              t("submit")
            )}
          </Button>

          <p className="rounded-lg border border-green-100 bg-green-50 p-3 text-center text-xs text-green-800 dark:border-green-900 dark:bg-green-950/40 dark:text-green-200">
            {t("mockHint", {
              username: MOCK_ACCOUNTS.ADMIN.username,
              password: MOCK_ACCOUNTS.ADMIN.password,
            })}
          </p>
        </form>
      </Form>
    </AuthCard>
  );
}
