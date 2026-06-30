"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { FcLeft } from "react-icons/fc";
import { z } from "zod";

import { LoginRequest } from "@/types/interfaces/auth";
import { Link } from "@/i18n/navigation";
import { Button } from "@/shared/components/ui/button";
import { InputField } from "@/shared/components/client/Form/inputField";
import { RHFForm } from "@/shared/components/client/Form/RHForm";

import AuthCard from "./auth-card";
import { loginSchema } from "@/types/validationSchema/authentication";

type TOTPForm = {
  handleSignInOTP: (values: LoginRequest) => Promise<any>;
};

export function OTPForm({ handleSignInOTP }: TOTPForm) {
  const t = useTranslations("auth.otp");
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const { update } = useSession();

  type LoginValues = z.infer<typeof loginSchema>;

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      usernameOrEmail: "admin",
      password: "admin123",
    },
  });

  const handleSubmit = async (values: LoginValues) => {
    const res: any = await handleSignInOTP(values);
    try {
      setIsLoading(true);
      if (!!res.success) {
        router.push("/");
        router.refresh();
        await update();
      } else {
        form.setError("usernameOrEmail", {
          type: "server",
          message: res.message || "Mã OTP không đúng",
        });
      }
    } catch (error) {
      form.setError("usernameOrEmail", {
        type: "server",
        message: res.message || "Mã OTP không đúng",
      });
    } finally {
      setIsLoading(false);
    }

    // login(values);
    // await signIn("credentials", values)
  };

  return (
    <div>
      <Link href="/auth/login">
        <FcLeft />
      </Link>

      <AuthCard title={t("title")} description={t("description")}>
        <RHFForm
          form={form}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          {/* {error ? (
            <Alert variant="destructive">
              <AlertTitle>{tError("title")}</AlertTitle>
              <AlertDescription>
                {error instanceof Error ? error.message : tError("loginFailed")}
              </AlertDescription>
            </Alert>
          ) : null} */}

          <InputField
            name="password"
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            type="string"
            namespaceErr="auth.validation"
          />

          <Button
            type="submit"
            className="mt-2 w-full bg-green-600 text-white hover:bg-green-700"
            disabled={isLoading}
            isLoading={isLoading}
          >
            {t("submit")}
          </Button>
        </RHFForm>
      </AuthCard>
    </div>
  );
}
