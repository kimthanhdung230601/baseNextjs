export const CustomerSex = {
  MALE: "male",
  FEMALE: "female",
} as const;

export type CustomerSex = (typeof CustomerSex)[keyof typeof CustomerSex];
