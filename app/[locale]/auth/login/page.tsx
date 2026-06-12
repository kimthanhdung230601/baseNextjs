import { LoginForm } from "@/feature/auth/components/login-form";
import { createPageMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createPageMetadata({
  path: "/auth/login",
  namespace: "auth.login",
  noIndex: true,
});

export default function LoginPage() {
  return <LoginForm />;
}
