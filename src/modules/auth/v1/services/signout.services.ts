/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Custom Modules
// --------------------------------------------------
import { ENV } from '@config/env.config';
import { verifyToken } from '@lib/generateToken';
import { UserModel } from '@models/user.model';

// --------------------------------------------------
// Custom Interface
// --------------------------------------------------
interface logoutPayload {
  token: string;
}

// --------------------------------------------------
// sign-out services
// --------------------------------------------------
/**
 * @param token -> JWT from header or cookie
 */
export const signoutServices = async (token: logoutPayload) => {
  try {
    if (!token) {
      throw new Error('Token is required');
    }
    // Verify Token
    const decoded = verifyToken(token.token, ENV.REFRESH_TOKEN_SECRET);

    // Remove refresh token from DB
    if (decoded.type === 'refresh') {
      await UserModel.findOneAndUpdate(
        { _id: decoded.id },
        {
          $unset: {
            refreshToken: '',
          },
        },
        {
          new: true,
        }
      );
    }

    // return
    return {
      success: true,
      status: 'success',
      message: 'Sign-out successful',
    };
  } catch (error) {
    const err = error instanceof Error ? error : new Error('Unknown error');
    throw err;
  }
};
