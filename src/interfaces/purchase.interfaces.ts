/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------

import { Document, Types } from 'mongoose';

export interface IPurchase extends Document {
  user: Types.ObjectId;
  course: Types.ObjectId;
  price: number;
  paymentMethod: 'credit' | 'debit' | 'stripe';
  transactionId: string;
  status: 'success' | 'failed' | 'pending';
  createdAt: Date;
}
