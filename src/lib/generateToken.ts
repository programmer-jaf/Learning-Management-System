/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

import jwt, { JwtPayload, SignOptions, Secret } from 'jsonwebtoken';
import { ENV } from '@config/env.config';

/**
 * Generate Access Token
 * @param payload - JWT payload
 */
export const generateAccessToken = (payload: JwtPayload): string => {
  const secret: Secret = ENV.ACCESS_TOKEN_SECRET;

  const options: SignOptions = {
    expiresIn: '1h', // '1h', '15m', etc.
  };

  return jwt.sign(payload, secret, options);
};

/**
 * Generate Refresh Token
 * @param payload - JWT payload
 */
export const generateRefreshToken = (payload: JwtPayload): string => {
  const secret: Secret = ENV.REFRESH_TOKEN_SECRET;

  const options: SignOptions = {
    expiresIn: '7d', // '7d', '30d', etc.
  };

  return jwt.sign(payload, secret, options);
};

/**
 * Verify Token
 * @param token - JWT token string
 * @param secret - Secret key
 */
export const verifyToken = (token: string, secret: Secret): JwtPayload => {
  // jwt.verify returns string | JwtPayload, cast safely
  return jwt.verify(token, secret) as JwtPayload;
};
