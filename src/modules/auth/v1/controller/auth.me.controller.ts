/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------
import { Request, Response } from 'express';
import { authMeServices } from '../services/auth.me.services';

// --------------------------------------------------
// Custom Modules
// --------------------------------------------------

// --------------------------------------------------
// Auth-me controller
// --------------------------------------------------
export const authMeController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?.id;
    console.log(`user id` + userId);
    if (!userId) {
      throw new Error('User id not found');
    }
    const user = await authMeServices(userId);
    if (!user) {
      throw new Error('User not found');
    }
    res.status(200).json({
      success: true,
      message: 'Authentication successful',
      data: user,
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
