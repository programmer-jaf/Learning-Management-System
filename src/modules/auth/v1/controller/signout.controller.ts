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
import { signoutServices } from '../services/signout.services';

// --------------------------------------------------
// sign-out controller
// --------------------------------------------------
export const signoutController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const token =
      req.cookies['refreshToken'] ||
      req.headers['authorization']?.split(' ')[1];
    if (!token) {
      res.status(400).json({
        success: false,
        status: 'error',
        message: 'Refresh token is required',
      });
    }
    // call services
    const result = await signoutServices({ token });
    res
      .status(200)
      .clearCookie('access_token')
      .clearCookie('refreshToken')
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
