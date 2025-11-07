/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
// --------------------------------------------------
// Custom Modules
// --------------------------------------------------
import { ENV } from '@config/env.config';

// --------------------------------------------------
// Types for JWTPayload
// --------------------------------------------------
interface JwtPayload {
  id: string;
  role: 'admin' | 'instructor' | 'student';
}

// --------------------------------------------------
// isAuthenticated Middleware
// --------------------------------------------------
export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token =
      req.cookies['token'] || req.headers['authorization']?.split(' ')[1];
    if (!token) {
      res.status(401).json({
        success: false,
        message: 'Authentication Required',
      });
    }
    const decoded = jwt.verify(token, ENV.ACCESS_TOKEN_SECRET) as JwtPayload;
    if (!decoded) {
      res.status(403).json({
        success: false,
        message: 'Access Denied ',
      });
    }
    req.user = decoded;
    next();
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'unknown error occurred';
    res.status(500).json({
      success: false,
      message,
    });
  }
};
