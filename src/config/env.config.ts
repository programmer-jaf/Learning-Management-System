/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

import { logger } from '@lib/logger';
import dotenv from 'dotenv';
import path from 'path';
import { z } from 'zod';

// --------------------------------------------------
// Load .env file
// --------------------------------------------------
dotenv.config({
  path: path.resolve(process.cwd(), '.env'),
});

// --------------------------------------------------
// Zod Schema for Environment Variables
// --------------------------------------------------

const envSchema = z.object({
  // --------------------------------------------------
  // App
  // --------------------------------------------------
  PORT: z.string().default('5000'),
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),

  // --------------------------------------------------
  // URLs
  // --------------------------------------------------
  FRONTEND_URL: z.string().url({
    message: 'Frontend_Url must be a valid URL',
  }),
  API_URL: z.string().url({
    message: 'API_URL must be a valid URL',
  }),

  // --------------------------------------------------
  // Database
  // --------------------------------------------------
  MONGO_URI: z.string().min(1, 'MONGO_URI is required'),

  // --------------------------------------------------
  // JWT Auth
  // --------------------------------------------------

  ACCESS_TOKEN_SECRET: z.string().min(1, 'ACCESS_TOKEN_SECRET is required'),
  REFRESH_TOKEN_SECRET: z.string().min(1, 'REFRESH_TOKEN_SECRET is required'),
  ACCESS_TOKEN_EXPIRES_IN: z.string().default('1h'),
  REFRESH_TOKEN_EXPIRES_IN: z.string().default('7d'),

  // --------------------------
  // Cloudinary
  // --------------------------
  CLOUDINARY_CLOUD_NAME: z.string().optional(),
  CLOUDINARY_API_KEY: z.string().optional(),
  CLOUDINARY_API_SECRET: z.string().optional(),

  // --------------------------
  // Stripe (Payment)
  // --------------------------
  STRIPE_SECRET_KEY: z.string().optional(),
  STRIPE_PUBLISHABLE_KEY: z.string().optional(),
  STRIPE_WEBHOOK_SECRET: z.string().optional(),

  // --------------------------
  // Email / SMTP
  // --------------------------
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.string().optional(),
  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),
  SMTP_FROM: z.string().optional(),

  // --------------------------
  // Security / Rate Limit
  // --------------------------
  RATE_LIMIT_WINDOW_MS: z.string().default('60000'),
  RATE_LIMIT_MAX: z.string().default('100'),
  CORS_ORIGIN: z.string().optional(),

  // --------------------------
  // Advanced / Optional
  // --------------------------
  SOCKET_URL: z.string().optional(),
  LOG_LEVEL: z.enum(['error', 'warn', 'info', 'debug']).default('info'),
  MAX_UPLOAD_SIZE: z.string().default('10mb'),
  DEFAULT_PAGE_LIMIT: z.string().default('10'),
});

const parsedEnv = envSchema.safeParse(process.env);
if (!parsedEnv.success) {
  logger.error('❌ Invalid or Missing env variables: ');
  logger.error(parsedEnv.error.format());
  process.exit(1);
}
// --------------------------------------------------
// Export Typed Config
// --------------------------------------------------
export const ENV = parsedEnv.data;

// Type Inference
export type EnvConfig = z.infer<typeof envSchema>;
