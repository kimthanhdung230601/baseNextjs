
// import { signIn } from "@/auth";
import { signIn } from "@/auth";
import { LoginForm } from "@/features/auth/components/login-form";
import { OTPForm } from "@/features/auth/components/otp-form";
import { createPageMetadata } from "@/lib/seo/create-page-metadata";
import { LoginRequest } from "@/types/interfaces/auth";
import { AuthError } from "next-auth";

export const generateMetadata = createPageMetadata({
  path: "/auth/otp",
  namespace: "auth.otp",
  noIndex: true,
});
const handleSignInOTP = async (values: LoginRequest) => {
  "use server";

  try {
    await signIn("credentials", {
      ...values,
      redirect: false,
    });

    return {
      success: true,
    };
  } catch (error) {
    if (error instanceof AuthError) {
      return {
        success: false,
        message: "Mã OTP không đúng",
      };
    }

    throw error;
  }
};

export default function OTPPage() {

  return (
    <OTPForm handleSignInOTP={handleSignInOTP} />
  )
}
