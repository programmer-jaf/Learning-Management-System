/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------
import { Request, Response } from 'express';

// --------------------------------------------------
// Custom Modules
// --------------------------------------------------
import { refreshAccessTokenServices } from '../services/refreshAccessToken.services';

// --------------------------------------------------
// Custom Interface
// --------------------------------------------------

// --------------------------------------------------
// refresh-token controller
// --------------------------------------------------
export const refreshAccessTokenController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const token =
      req.headers['authorization']?.split(' ')[1] ||
      req.cookies['refreshToken'];
    if (!token) {
      res.status(400).json({
        success: false,
        status: 'error',
        message: 'Refresh token is required',
      });
    }
    // call services
    const result = await refreshAccessTokenServices(token);
    res
      .status(200)
      .cookie('access_token', result, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 1000 * 60 * 60 * 24,
      })
      .json({
        data: result,
      });
  } catch (error) {
    const err = error instanceof Error ? error : new Error('Unknown error');
    res.status(500).json({
      success: false,
      status: 'error',
      message: err.message,
    });
  }
};
