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
import { signinServices } from '@modules/auth/v1/services/signin.services';

// --------------------------------------------------
// sign-in controller
// --------------------------------------------------
export const signinController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, password } = req.body;
    const user = await signinServices({ email, password });
    res
      .status(200)
      .cookie('token', user.accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      })
      .json({
        success: true,
        message: 'Sign-in successful',
        data: {
          user,
        },
      });
  } catch (error: unknown) {
    const err = error instanceof Error ? error : new Error('Unknown error');
    res.status(500).json({
      success: false,
      status: 'error',
      message: err.message,
    });
    console.log(`Error duing signin ${error}`);
  }
};
