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
import { IWishlist } from '@interfaces/wishlist.interfaces';

// --------------------------------------------------
// WishList Schema
// --------------------------------------------------

const wishlistSchema = new Schema<IWishlist>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    course: {
      type: Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// --------------------------------------------------
// WishList Model
// --------------------------------------------------

export const WishListModel = model('wishlist', wishlistSchema);
