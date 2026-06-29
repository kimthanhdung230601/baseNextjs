import RegisterForm from "@/features/auth/components/register-form";
import { ROUTES } from "@/constants/route";
import { createPageMetadata } from "@/lib/seo/create-page-metadata";

export const generateMetadata = createPageMetadata({
  path: ROUTES.AUTH.REGISTER,
  namespace: "auth.register",
  noIndex: true,
});

export default function RegisterPage() {
  return <RegisterForm />;
}
