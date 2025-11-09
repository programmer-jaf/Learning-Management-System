/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------

// --------------------------------------------------
// Custom Modules
// --------------------------------------------------

import { generateAccessToken, generateRefreshToken } from '@lib/generateToken';
import { comparePassword } from '@lib/password';
import { UserModel } from '@models/user.model';
import { Types } from 'mongoose';
// --------------------------------------------------
// Custom Interface
interface ISigninPayload {
  email: string;
  password: string;
}
// --------------------------------------------------

// --------------------------------------------------
// sign-in services
// --------------------------------------------------
export const signinServices = async (payload: ISigninPayload) => {
  try {
    /*
    Logic: sign-in
    1. validate payload
    2. check if user exists & not banned
    3. check password match with hashed password
    4. generate access & refresh token
    5. store refresh token in DB
    6. send success response with userInfo
    */
    // 1. validate payload
    const { email, password } = payload;
    if (!email || !password) {
      throw new Error('All fields are required');
    }
    // 2. check if user exists
    const user = await UserModel.findOne({ email }).lean();
    if (!user) {
      throw new Error('User not found');
    }
    // TODO: if user is banned

    // 3. check password match with hashed password
    const isPasswordMatch = await comparePassword(password, user.password);
    if (!isPasswordMatch) {
      throw new Error('Invalid password');
    }
    // 4. generate access & refresh token
    const accessToken = generateAccessToken({
      id: user._id as Types.ObjectId,
      role: user.role,
    });
    const refreshToken = generateRefreshToken({
      id: user._id as Types.ObjectId,
      role: user.role,
    });
    // 5. store refresh token in DB
    await UserModel.updateOne({ _id: user._id }, { refreshToken });
    // 6. Don't send Password as response
    const { password: _, ...safeUser } = user;
    // 6. send success response with userInfo

    return {
      accessToken,
      user: safeUser,
    };
  } catch (error) {
    console.log(`error ${error}`);
    const err = error instanceof Error;
    throw err;
  }
};
