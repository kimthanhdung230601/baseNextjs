import { ROUTES } from "@/constants/route";
import { createPageMetadata } from "@/lib/seo/create-page-metadata";
import LoginForm from "@/features/auth/components/login-form";

export const generateMetadata = createPageMetadata({
  path: ROUTES.AUTH.LOGIN,
  namespace: "auth.login",
  noIndex: true,
});

export default function LoginPage() {
  return <LoginForm />;
}
