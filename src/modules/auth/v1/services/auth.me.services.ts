/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------
import { FlattenMaps, Types } from 'mongoose';
// --------------------------------------------------
// Custom Modules
// --------------------------------------------------
import { IUser } from '@interfaces/user.interfaces';
import { UserModel } from '@models/user.model';

// --------------------------------------------------
// auth-me services
// --------------------------------------------------
export const authMeServices = async (
  userId: Types.ObjectId
): Promise<FlattenMaps<IUser> | null> => {
  try {
    const user = await UserModel.findById(userId).lean().select('-password');
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    const err = error instanceof Error ? error : new Error('Unknown error');
    throw err;
  }
};
