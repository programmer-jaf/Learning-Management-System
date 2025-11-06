/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node-Modules
// --------------------------------------------------
import { IGiftCourse } from '@interfaces/gift.interfaces';
import { Schema, model } from 'mongoose';

// --------------------------------------------------
// Custom-Modules
// --------------------------------------------------

// --------------------------------------------------
// Gift Schema
// --------------------------------------------------
const giftSchema = new Schema<IGiftCourse>(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    recipientName: {
      type: String,
    },
    recipientEmail: {
      type: String,
    },
    message: {
      type: String,
    },
    course: {
      type: Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
    },
    payment: {
      cardName: {
        type: String,
      },
      cardNumber: {
        type: String,
      },
      expiry: {
        type: String,
      },
      cvc: {
        type: String,
      },
      rememberCard: {
        type: Boolean,
      },
    },
  },
  {
    timestamps: true,
  }
);

// --------------------------------------------------
// Gift Model
// --------------------------------------------------
export const GiftModel = model<IGiftCourse>('GiftCourse', giftSchema);
