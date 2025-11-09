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
import { signupServices } from '../services/signup.services';
import { ENV } from '@config/env.config';

// --------------------------------------------------
// sign-up controller
// --------------------------------------------------
export const signupController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { firstName, lastName, username, email, password } = req.body;

    const user = await signupServices({
      firstName,
      lastName,
      username,
      email,
      password,
    });

    res
      .status(201)
      .cookie('access_token', user.accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 1000 * 60 * 60 * 24,
      })
      .cookie('refreshToken', user.user.refreshToken, {
        httpOnly: true,
        secure: ENV.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .json({
        success: true,
        status: 'success',
        message: 'Sign-up successful',
        data: {
          user,
        },
      });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Unknown Error during sign-up';
    res.status(500).json({
      success: false,
      status: 'error',
      message,
    });
  }
};
