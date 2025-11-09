/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
//  Custom Interface for Payload
// --------------------------------------------------
import { UserModel } from '@models/user.model';
import { hashedPassword } from '@lib/password';
import { generateAccessToken, generateRefreshToken } from '@lib/generateToken';
import { Types } from 'mongoose';
// --------------------------------------------------
//  Custom Interface for Payload
// --------------------------------------------------
interface ISignupPayload {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export const signupServices = async (payload: ISignupPayload) => {
  try {
    // const { firstName, lastName, email, password } = payload;

    const { firstName, lastName, username, email, password } = payload;
    /*
    1. check all the fields
    2. check if user already exists
    3. Hash password using Bcrypt
    4. Create User with default role
    5. Generate Access & Refresh Token
    6. Save Refresh Token in DB 
    7. Send success response
    */
    //  1. check all the fields
    if (!firstName || !lastName || !username || !email || !password) {
      throw new Error('All fields are required');
    }
    // 2. check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      throw new Error('User already exists');
    }
    // 3. hash password
    const passwordHashed = await hashedPassword(password);
    // 4. create user
    const user = new UserModel({
      firstName,
      lastName,
      username,
      email,
      password: passwordHashed,
    });

    // 5. generate access & refresh token
    const accessToken = await generateAccessToken({
      id: user._id as Types.ObjectId,
      role: user.role,
      type: 'access',
    });
    const refreshToken = await generateRefreshToken({
      id: user._id as Types.ObjectId,
      role: user.role,
      type: 'refresh',
    });

    // 6. save refresh token in DB
    user.refreshToken = refreshToken;
    await user.save();
    return {
      user: user,
      accessToken,
    };
  } catch (error) {
    const errMessage = error instanceof Error ? error.message : 'Unknown Error';
    throw new Error(errMessage);
  }
};
