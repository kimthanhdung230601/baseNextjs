import { createPageMetadata } from "@/lib/seo/create-page-metadata";
import { LoginForm } from "@/features/auth/components/login-form";
import { Button } from "@/shared/components/ui/button";
import { signIn, signOut } from "@/auth";
import { ROUTES } from "@/constants/route";

export const generateMetadata = createPageMetadata({
  path: ROUTES.AUTH.LOGIN,
  namespace: "auth.login",
  noIndex: true,
});

export default function LoginPage() {

  const handleSignInGoogle = async () => {
    "use server"
   await signIn("google", {
      redirectTo: "/",
    })
  }

  const handleSignInFacebook = async () => {
    "use server"
    await signIn("facebook", {
      redirectTo: "/",
    })
  }

  return (
    <>
      <LoginForm handleSignInGoogle={handleSignInGoogle} handleSignInFacebook={handleSignInFacebook} />;

    </>



  );
}
