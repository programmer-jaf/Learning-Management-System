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
import { IPurchase } from '@interfaces/purchase.interfaces';

// --------------------------------------------------
// Purchase Schema
// --------------------------------------------------
const purchaseSchema = new Schema<IPurchase>(
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
    price: {
      type: Number,
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
  },
  {
    timestamps: true,
  }
);

// --------------------------------------------------
// Purchase Model
// --------------------------------------------------
export const PurchaseModel = model<IPurchase>('Purchase', purchaseSchema);
