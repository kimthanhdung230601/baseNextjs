"use client";

import { useMemo } from "react";
import AuthCard from "@/features/auth/components/auth-card";
import useRegister from "@/features/auth/hooks/use-register";
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

export default function RegisterForm() {
  const t = useTranslations("auth.register");
  const tError = useTranslations("auth.error");
  const tValidation = useTranslations("auth.validation");
  const tCommon = useTranslations("common");
  const { mutate: register, isPending, error } = useRegister();

  const registerSchema = useMemo(
    () =>
      z
        .object({
          username: z.string().min(3, tValidation("usernameMin")),
          email: z.string().email(tValidation("emailInvalid")),
          password: z.string().min(6, tValidation("passwordMin")),
          confirmPassword: z.string(),
        })
        .refine((data) => data.password === data.confirmPassword, {
          message: tValidation("confirmPasswordMismatch"),
          path: ["confirmPassword"],
        }),
    [tValidation]
  );

  type RegisterValues = z.infer<typeof registerSchema>;

  const form = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = ({ confirmPassword: _, ...values }: RegisterValues) => {
    register(values);
  };

  return (
    <AuthCard
      title={t("title")}
      description={t("description")}
      footer={
        <span className="text-center text-sm text-zinc-600 dark:text-zinc-400">
          {t("hasAccount")}{" "}
          <Link
            href="/auth/login"
            className="font-medium text-green-600 hover:text-green-700 hover:underline dark:text-green-400 dark:hover:text-green-300"
          >
            {tCommon("login")}
          </Link>
        </span>
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
                {error instanceof Error
                  ? error.message
                  : tError("registerFailed")}
              </AlertDescription>
            </Alert>
          ) : null}

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("username")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("usernamePlaceholder")}
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("email")}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={t("emailPlaceholder")}
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("confirmPassword")}</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder={t("confirmPasswordPlaceholder")}
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
        </form>
      </Form>
    </AuthCard>
  );
}
