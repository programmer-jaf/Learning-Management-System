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
import { verifyToken, MyJwtPayload } from '@lib/generateToken';
import { ENV } from '@config/env.config';
import { logger } from '@lib/logger';

// --------------------------------------------------
// Extend Express Request to include user
// --------------------------------------------------
declare module 'express-serve-static-core' {
  interface Request {
    user?: MyJwtPayload;
  }
}

// --------------------------------------------------
// isAuthenticated Middleware
// --------------------------------------------------
export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // 1️⃣ Get token from headers or cookies
    const token =
      req.cookies['access_token'] ||
      req.headers['authorization']?.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required',
      });
    }

    // 2️⃣ Verify token
    const decoded = verifyToken(token, ENV.ACCESS_TOKEN_SECRET);

    // 3️⃣ Ensure it is an access token
    if (decoded.type !== 'access') {
      return res.status(403).json({
        success: false,
        message: 'Invalid token type',
      });
    }

    // 4️⃣ Attach user to request object
    req.user = {
      id: decoded.id,
      role: decoded.role,
      type: decoded.type,
    };

    // 5️⃣ Proceed to next middleware
    next();
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Unknown authentication error';
    logger.error(error);
    res.status(401).json({
      success: false,
      message,
    });
  }
};
