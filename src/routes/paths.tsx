export const PATHS = {
  HOME: "/",
  REGISTER: "/register",
  LOGIN: "/login",
  VERIFY_OTP: "/verify-otp"
} as const;

export type AppPath = (typeof PATHS)[keyof typeof PATHS]