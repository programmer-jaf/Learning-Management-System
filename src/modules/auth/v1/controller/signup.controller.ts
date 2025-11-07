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

// --------------------------------------------------
// sign-up controller
// --------------------------------------------------
export const signupController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { firstName, lastName, email, password } = await req.body;
    console.log(`${firstName},${lastName},${email},${password}`);
    res.status(200).json({
      success: true,
      status: 'success',
      message: 'Sign-up successful',
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
