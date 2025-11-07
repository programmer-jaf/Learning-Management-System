/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------

import { Document, Types } from 'mongoose';

export interface IWishlistItem extends Document {
  userId: Types.ObjectId;
  courseId: Types.ObjectId;
  createdAt: Date;
}
