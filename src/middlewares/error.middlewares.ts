/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------
import { Request, Response, NextFunction } from 'express';

// --------------------------------------------------
// Custom Modules
// --------------------------------------------------
import { logger } from '@lib/logger';

// --------------------------------------------------
// Custom Interface for error
// --------------------------------------------------
interface ErrorWithStatus extends Error {
  status?: number;
}

// --------------------------------------------------
// ErrorHandler
// --------------------------------------------------
export const errorHandler = async (
  err: ErrorWithStatus,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(err);
  if (res.headersSent) {
    return next(err);
  }
  const status = err.status || 500;
  res.status(status).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
};
