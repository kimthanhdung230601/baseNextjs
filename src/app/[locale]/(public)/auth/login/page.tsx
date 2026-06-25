import { LoginForm } from "@/features/auth/components/login-form";
import { ROUTES } from "@/constants/route";
import { createPageMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createPageMetadata({
  path: ROUTES.AUTH.LOGIN,
  namespace: "auth.login",
  noIndex: true,
});

export default function LoginPage() {
  return <LoginForm />;
}
