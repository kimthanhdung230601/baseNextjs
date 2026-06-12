export const Segment = {
  PERSONAL: "personal",
  BUSINESS: "business",
} as const;

export type Segment = (typeof Segment)[keyof typeof Segment];
