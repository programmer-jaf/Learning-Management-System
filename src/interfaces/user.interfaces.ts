/**
 * Copyright 2025
 * Programmer-Jaf | All Rights Reserved
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------
import { Document, Types } from 'mongoose';

// --------------------------------------------------
// Custom-Modules
// --------------------------------------------------
import { IWishlist } from './wishlist.interfaces';
import { ICart } from './cart.interfaces';
import { IPurchaseItem } from './purchase.interfaces';
import { IWatchItem } from './watch.interfaces';

// --------------------------------------------------
// IUserSocialLinks interfaces
// --------------------------------------------------
export interface IUserSocialLinks {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  whatsapp?: string;
  youtube?: string;
  website?: string;
}

// --------------------------------------------------
// IUser interfaces
// --------------------------------------------------
export interface IUser extends Document {
  // --------------------------------------------------
  // Auth
  // --------------------------------------------------
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  // --------------------------------------------------
  // Auth
  // --------------------------------------------------
  password: string;
  role: 'student' | 'instructor' | 'admin';
  isVerified: boolean;

  // --------------------------------------------------
  // Profile
  // --------------------------------------------------
  bio?: string;
  title?: string;
  image?: string;
  field?: string;

  // --------------------------------------------------
  // Social Links
  // --------------------------------------------------
  social?: IUserSocialLinks;

  // --------------------------------------------------
  // LMS Relations
  // --------------------------------------------------
  wishlist: Types.ObjectId[] | IWishlist[];
  cart: Types.ObjectId[] | ICart[];
  purchased: Types.ObjectId[] | IPurchaseItem[];
  watching: Types.ObjectId[] | IWatchItem[];

  // --------------------------------------------------
  // TimeStamps (auto from mongoose)
  // --------------------------------------------------
  createdAt: Date;
  updatedAt: Date;
}
