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
import { ICart } from '@interfaces/cart.interfaces';

// --------------------------------------------------
// Cart Schema
// --------------------------------------------------
const cartSchema = new Schema<ICart>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    items: [
      {
        course: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: 'Course',
        },
        price: {
          type: Number,
        },
      },
    ],
    totalPrice: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// --------------------------------------------------
// Cart Model
// --------------------------------------------------
export const CartModel = model<ICart>('Cart', cartSchema);
