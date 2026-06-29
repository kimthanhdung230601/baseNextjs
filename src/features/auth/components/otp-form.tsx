"use client";

import { useMemo } from "react";
import { Link } from "@/i18n/navigation";
import { FcLeft } from "react-icons/fc";

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
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { Spinner } from "@/shared/components/ui/spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoginRequest } from "@/types/interfaces/auth";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import useLogin from "../hooks/use-login";
import AuthCard from "./auth-card";

type TOTPForm = {
  handleSignInOTP: (values: LoginRequest) =>  Promise<any>;
};

export function OTPForm({ handleSignInOTP }: TOTPForm) {
  const t = useTranslations("auth.otp");
  const tError = useTranslations("auth.error");
  const tValidation = useTranslations("auth.validation");
  const tCommon = useTranslations("common");
  const router = useRouter();

  const { login, isPending, error } = useLogin();

  const { update } = useSession();

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
      usernameOrEmail: "admin",
      password: "admin123",
    },
  });

  const handleSubmit = async (values: LoginValues) => {
    console.log("valueLogin", values);
    const res: any = await handleSignInOTP(values);

    if (!!res.success) {

      router.push("/")
      router.refresh();
      await update();

    } else {

      form.setError("usernameOrEmail", {
        type: "server",
        message: res.message || "Mã OTP không đúng",
      });
    }
    // login(values);
    // await signIn("credentials", values)
  };

  return (


    <div>
      <Link href="/auth/login">
        <FcLeft />
      </Link>

      <AuthCard
        title={t("title")}
        description={t("description")}
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      // placeholder={t("phoneNumberPlaceholder")}
                      autoFocus
                      type="string"
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

    </div >
  );
}
