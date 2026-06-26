"use client";

import { useMemo } from "react";
import { MOCK_ACCOUNTS } from "@/constants/auth";
import { FcGoogle } from "react-icons/fc";
import { AuthCard } from "@/features/auth/components/auth-card";
import { useLogin } from "@/features/auth/hooks/use-login";
import { Link } from "@/i18n/navigation";

import { AiFillGoogleCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
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


import { useRouter } from "next/navigation";
import { signIn } from "@/auth";
// import { signIn } from "@/auth";
type LoginFormProps = {
  handleSignInGoogle: () => void;
  handleSignInFacebook : () => void;
};

export function LoginForm({handleSignInGoogle , handleSignInFacebook} : LoginFormProps) {
  const t = useTranslations("auth.login");
  const tError = useTranslations("auth.error");
  const tValidation = useTranslations("auth.validation");
  const tCommon = useTranslations("common");
  const { login, isPending, error } = useLogin();

  const router = useRouter();

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
      password: "admin123",
    },
  });

  const handleSubmit = (values: LoginValues) => {
    console.log("valueLogin", values);
    router.push("otp");
    // login(values);
  };

  return (
    <AuthCard
      title={t("title")}
      description={t("description")}
    // footer={
    //   <div className="flex w-full flex-col items-center gap-2 text-center text-sm text-zinc-600 dark:text-zinc-400">
    //     <Link
    //       href="/forgot-password"
    //       className="font-medium text-green-600 hover:text-green-700 hover:underline dark:text-green-400 dark:hover:text-green-300"
    //     >
    //       {t("forgotPassword")}
    //     </Link>
    //     <span>
    //       {t("noAccount")}{" "}
    //       <Link
    //         href="/auth/register"
    //         className="font-medium text-green-600 hover:text-green-700 hover:underline dark:text-green-400 dark:hover:text-green-300"
    //       >
    //         {tCommon("register")}
    //       </Link>
    //     </span>
    //   </div>
    // }
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
                <FormLabel>
                  {/* {"Số điện thoại"} */}
                  {t("phoneNumber")}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("phoneNumberPlaceholder")}
                    autoFocus
                    type="tel"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
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
          /> */}

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

          <Button
            type="button"
            // className="mt-2 w-full bg-amber-50-600"
            leftIcon={<FcGoogle className="text-4xl" />}
            disabled={isPending}
            asChild={true}
            variant={"outline"}
            onClick={handleSignInGoogle}
          >
            {isPending ? (
              <>
                <Spinner className="text-white" />
                {t("submitting")}
              </>
            ) : (
              <p>
                {"Đăng nhập với Google"}
              </p>

              // t("submit")
            )}
          </Button>

          <Button
            type="button"
            // className="mt-2 w-full bg-amber-50-600"
            leftIcon={<BsFacebook className="text-4xl text-blue-600" />}
            disabled={isPending}
            asChild={false}
            variant={"outline"}
            onClick={handleSignInFacebook}

          >
            {isPending ? (
              <>
                <Spinner className="text-white" />
                {t("submitting")}
              </>
            ) : (
              <p>
                {"Đăng nhập với Facebook"}
              </p>

              // t("submit")
            )}
          </Button>



        </form>
      </Form>
    </AuthCard>
  );
}
