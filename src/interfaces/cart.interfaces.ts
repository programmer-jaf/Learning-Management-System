/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------
import { Document, Types } from 'mongoose';

export interface ICart extends Document {
  user: Types.ObjectId;
  items: [course: Types.ObjectId, price: number];
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}
