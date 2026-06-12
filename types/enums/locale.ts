export const Locale = {
  EN: "en",
  VI: "vi",
} as const;

export type Locale = (typeof Locale)[keyof typeof Locale];
