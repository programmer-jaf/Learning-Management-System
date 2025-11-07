/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
//  Custom Interface for Payload
// --------------------------------------------------
import { UserModel } from '@models/user.model';
import { hashedPassword } from '@lib/password';
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
    3. hash password
    3. create user
    4. return user
    5. create token
    6. send token
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

    await user.save();
    return {
      user: user,
    };
  } catch (error) {
    const errMessage = error instanceof Error ? error.message : 'Unknown Error';
    throw new Error(errMessage);
  }
};
