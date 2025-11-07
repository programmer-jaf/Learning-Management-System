/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------
import rateLimit from 'express-rate-limit';

// --------------------------------------------------
// Custom Modules
// --------------------------------------------------
import { ENV } from '@config/env.config';

// --------------------------------------------------
// Protect APIs from abuse
// --------------------------------------------------
export const apiLimiter = rateLimit({
  windowMs: Number(ENV.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
  max: Number(ENV.RATE_LIMIT_MAX) || 100,
  message: {
    success: false,
    message: 'Too many request from this IP, please try again later...',
  },
});
