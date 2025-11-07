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

    res.status(201).json({
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
