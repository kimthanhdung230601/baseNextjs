// Common query keys for react-query or tanstack-query

export const QUERY_KEYS = {
  AUTH: {
    LOGIN: ["auth", "login"] as const,
    REGISTER: ["auth", "register"] as const,
    PROFILE: ["auth", "profile"] as const,
  },
  USER: {
    LIST: ["user", "list"] as const,
    DETAIL: (id: string | number) => ["user", "detail", id] as const,
  },
  CUSTOMER: {
    LIST: ["customer", "list"] as const,
    DETAIL: (id: string) => ["customer", "detail", id] as const,
  },
} as const;
