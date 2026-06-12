import { RegisterForm } from "@/feature/auth/components/register-form";
import { createPageMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createPageMetadata({
  path: "/auth/register",
  namespace: "auth.register",
  noIndex: true,
});

export default function RegisterPage() {
  return <RegisterForm />;
}
