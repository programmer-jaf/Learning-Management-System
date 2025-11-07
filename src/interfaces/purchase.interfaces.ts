/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node-Modules
// --------------------------------------------------
import { Document, Types } from 'mongoose';

export interface IPurchaseItem extends Document {
  userId: Types.ObjectId;
  courseId: Types.ObjectId;

  amount: number; // course price
  currency: string; // e.g., 'USD'
  paymentMethod?: string; // 'stripe', 'paypal', etc.
  transactionId?: string; // gateway transaction id
  status: 'success' | 'failed' | 'pending'; // transaction status

  purchasedAt: Date; // timestamp
  completed: boolean; // true if purchase is successful

  createdAt: Date;
  updatedAt: Date;
}
