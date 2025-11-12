/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------
import { Types } from 'mongoose';

// --------------------------------------------------
// Custom Modules
// --------------------------------------------------
import { UserModel } from '@models/user.model';
import { generateAccessToken } from '@lib/generateToken';

// --------------------------------------------------
// Custom Interface
// --------------------------------------------------
interface IRefreshTokenPayload {
  token: string;
}

// --------------------------------------------------
// refresh-token services
// --------------------------------------------------

export const refreshAccessTokenServices = async (
  payload: IRefreshTokenPayload
) => {
  const user = await UserModel.findOne({ refreshToken: payload.token });
  console.log(`refresh token in db ${user?.refreshToken}`);
  if (!user) {
    throw new Error('Invalid refresh token');
  }
  //-------------------------------------------------
  // Generate Access Token
  // ------------------------------------------------
  const userId = user?._id;
  const role = user?.role;
  const accessToken = generateAccessToken({
    id: userId as Types.ObjectId,
    role,
    type: 'access',
  });
  // -------------------------------------------------
  // Update Refresh Token in DB
  // ------------------------------------------------
  await UserModel.findOneAndUpdate(
    {
      _id: userId,
    },
    {
      refreshToken: null,
    }
  );
  // -------------------------------------------------
  // Return Access Token
  // ------------------------------------------------
  return accessToken;
};
