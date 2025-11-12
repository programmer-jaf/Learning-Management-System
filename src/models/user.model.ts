/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------
import { Model, Schema, model } from 'mongoose';
// --------------------------------------------------
// Custom-Modules
// --------------------------------------------------
import { IUser } from '@interfaces/user.interfaces';

// --------------------------------------------------
// User Schema
// --------------------------------------------------

const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    role: {
      type: String,
      enum: ['student', 'instructor', 'admin'],
      default: 'student',
    },
    refreshToken: {
      type: String,
    },
    bio: {
      type: String,
      trim: true,
    },
    title: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
    },
    field: {
      type: String,
    },
    social: {
      facebook: String,
      instagram: String,
      twitter: String,
      whatsapp: String,
      youtube: String,
      website: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    wishlist: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Wishlist',
      },
    ],
    cart: [{ type: Schema.Types.ObjectId, ref: 'Cart' }],
    purchased: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Purchase',
      },
    ],
    watching: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Watch',
      },
    ],
  },
  {
    timestamps: true,
  }
);

// --------------------------------------------------
// User Model
// --------------------------------------------------
export const UserModel: Model<IUser> = model<IUser>('User', userSchema);
