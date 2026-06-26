import { createPageMetadata } from "@/lib/seo/create-page-metadata";
import { LoginForm } from "@/features/auth/components/login-form";
import { Button } from "@/shared/components/ui/button";
import { signIn, signOut } from "@/auth";

export const generateMetadata = createPageMetadata({
  path: "/auth/login",
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

  const hanldeSignOut = async () => {
    "use server"
    await signOut();
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
      <Button
        type="button"

        variant={"outline"}
        onClick={hanldeSignOut}
      >
        đăng xuất
      </Button>

    </>



  );
}
