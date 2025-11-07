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
import { IPurchaseItem } from '@interfaces/purchase.interfaces';

// --------------------------------------------------
// Purchase Schema
// --------------------------------------------------
const purchaseSchema = new Schema<IPurchaseItem>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    courseId: {
      type: Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
      default: 'USD',
    },
    paymentMethod: {
      type: String,
    },
    transactionId: {
      type: String,
    },
    status: {
      type: String,
      enum: ['success', 'failed', 'pending'],
      default: 'success',
    },

    purchasedAt: {
      type: Date,
      default: Date.now,
    },
    completed: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// --------------------------------------------------
// Purchase Model
// --------------------------------------------------
export const PurchaseModel = model<IPurchaseItem>('Purchase', purchaseSchema);
