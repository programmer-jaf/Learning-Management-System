/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------

import { Document, Types } from 'mongoose';

export interface IWishlist extends Document {
  user: Types.ObjectId;
  course: Types.ObjectId;
  createdAt: Date;
}
