"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { z } from "zod";

import { loginSchema } from "@/types/validationSchema/authentication";
import { MOCK_ACCOUNTS } from "@/constants/auth";
// import { useLogin } from "@/features/auth/hooks/use-login";
import AuthCard from "@/features/auth/components/auth-card";
import { Button } from "@/shared/components/ui/button";
import { InputField } from "@/shared/components/client/Form/inputField";
import { RHFForm } from "@/shared/components/client/Form/RHForm";

// import { signIn } from "@/auth";
type LoginFormProps = {
  handleSignInGoogle: () => void;
  handleSignInFacebook: () => void;
};

export function LoginForm({
  handleSignInGoogle,
  handleSignInFacebook,
}: LoginFormProps) {
  const t = useTranslations("auth.login");

  const router = useRouter();

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
    <AuthCard title={t("title")} description={t("description")}>
      <RHFForm
        form={form}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <InputField
          name="usernameOrEmail"
          label={t("phoneNumber")}
          placeholder="Nhập tài khoản"
          type="string"
          namespaceErr="auth.validation"
        />

        <Button
          type="submit"
          className="mt-2 w-full bg-green-600 text-white hover:bg-green-700"
          loadingText={t("submitting")}
        >
          {t("submit")}
        </Button>

        <p className="rounded-lg border border-green-100 bg-green-50 p-3 text-center text-xs text-green-800 dark:border-green-900 dark:bg-green-950/40 dark:text-green-200">
          {t("mockHint", {
            username: MOCK_ACCOUNTS.ADMIN.username,
            password: MOCK_ACCOUNTS.ADMIN.password,
          })}
        </p>
        <Button
          type="button"
          leftIcon={<FcGoogle className="text-4xl" />}
          loadingText={t("submitting")}
          variant={"outline"}
          onClick={handleSignInGoogle}
        >
          <p>{"Đăng nhập với Google"}</p>
          {/* {t("submit")} */}
        </Button>

        <Button
          type="button"
          leftIcon={<BsFacebook className="text-4xl text-blue-600" />}
          loadingText={t("submitting")}
          variant={"outline"}
          onClick={handleSignInFacebook}
        >
          <p>{"Đăng nhập với Facebook"}</p>
          {/* {t("submit")} */}
        </Button>
      </RHFForm>
    </AuthCard>
  );
}
