/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node-Modules
// --------------------------------------------------
import { Schema, model } from 'mongoose';

// --------------------------------------------------
// Custom-Modules
// --------------------------------------------------
import { IUser } from '@interfaces/user.interfaces';

// --------------------------------------------------
// User-Schema
// --------------------------------------------------
const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
      minLength: [3, 'first Name at least character'],
      maxLength: [50, 'first Name cant be greater than 50 character'],
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
      minLength: [3, 'last Name at least character'],
      maxLength: [50, 'last Name cant be greater than 50 character'],
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
      minLength: [8, 'password length must be at least 8'],
    },
    role: {
      type: String,
      enum: ['student', 'instructor', 'admin'],
      default: 'student',
    },
    bio: {
      typ: String,
    },
    title: {
      typ: String,
    },
    image: {
      type: String,
    },
    field: {
      type: String,
    },
    social: {
      facebook: {
        type: String,
      },
      instagram: {
        type: String,
      },
      twitter: {
        type: String,
      },
      whatsapp: {
        type: String,
      },
      youtube: {
        type: String,
      },
      website: {
        type: String,
      },
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// --------------------------------------------------
// User Model
// --------------------------------------------------
export const UserModel = model<IUser>('User', userSchema);
