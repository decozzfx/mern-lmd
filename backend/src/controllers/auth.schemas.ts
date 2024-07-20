import { z } from "zod";

export const emailSchema = z.string().email().min(1).max(255);
export const userNameSchema = z.string().min(1).max(255);
export const realNameSchema = z.string().min(1).max(255);
export const phoneSchema = z.string().min(1).max(255);
export const idSchema = z.string().min(1).max(255);

const passwordSchema = z.string().min(6).max(255);

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  userAgent: z.string().optional(),
});

export const registerSchema = loginSchema
  .extend({
    confirmPassword: passwordSchema,
    userName: userNameSchema,
    realName: realNameSchema,
    phone: phoneSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const updateSchema = z.object({
  _id: idSchema,
  userName: userNameSchema,
  realName: realNameSchema,
  phone: phoneSchema,
});

export const verificationCodeSchema = z.string().min(1).max(24);

export const resetPasswordSchema = z.object({
  password: passwordSchema,
  verificationCode: verificationCodeSchema,
});
