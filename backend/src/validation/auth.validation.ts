import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  fullName: z.string().min(2, 'Full name is required'),
  phoneNumber: z.string().optional(),
  userName: z.string().optional(),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(1, 'Password is required'),
});

export const changePasswordSchema = z.object({
  oldPassword: z.string().min(1, 'Old password is required'),
  newPassword: z.string().min(6, 'New password must be at least 6 characters'),
});

export const resetPasswordSchema = z.object({
  email: z.string().email('Invalid email format'),
  otp: z.string().min(4, 'OTP is required'),
  newPassword: z.string().min(6, 'New password must be at least 6 characters'),
});

export const emailVerificationSchema = z.object({
  email: z.string().email('Invalid email format'),
  otp: z.string().min(4, 'OTP is required'),
});
