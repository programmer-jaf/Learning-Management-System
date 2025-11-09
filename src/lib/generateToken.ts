/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import { ENV } from '@config/env.config';
import { Types } from 'mongoose';

/**
 * JWT Payload Interface
 */
export interface MyJwtPayload {
  id: Types.ObjectId;
  role: 'admin' | 'instructor' | 'student';
  type?: 'access' | 'refresh';
}

/**
 * Generate Access Token
 * @param payload - JWT payload
 */
export const generateAccessToken = (payload: MyJwtPayload): string => {
  const options: SignOptions = { expiresIn: '1h' };
  return jwt.sign(
    { ...payload, type: 'access' },
    ENV.ACCESS_TOKEN_SECRET as Secret,
    options
  );
};

/**
 * Generate Refresh Token
 * @param payload - JWT payload
 */
export const generateRefreshToken = (payload: MyJwtPayload): string => {
  const options: SignOptions = { expiresIn: '7d' };
  return jwt.sign(
    { ...payload, type: 'refresh' },
    ENV.REFRESH_TOKEN_SECRET as Secret,
    options
  );
};

/**
 * Verify JWT Token
 * @param token - JWT string
 * @param secret - Secret key
 * @returns decoded payload
 */
export const verifyToken = (token: string, secret: Secret) => {
  try {
    const decoded = jwt.verify(token, secret);
    if (typeof decoded === 'string') {
      throw new Error('Invalid token payload');
    }
    return decoded as MyJwtPayload;
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Token verification failed';
    throw new Error(message);
  }
};
