
import { z } from "zod";
export const loginSchema = z.object({
  usernameOrEmail: z.string().min(1, "usernameOrEmailRequired"),
  password: z.string().min(1, "passwordRequired"),
});