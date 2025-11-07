/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------
import { Document, Types } from 'mongoose';

export interface IGiftPayment {
  cardName?: string;
  cardNumber?: string;
  expiry?: string;
  cvc?: string;
  rememberCard?: boolean;
}

export interface IGiftCourse extends Document {
  sender: Types.ObjectId;
  recipientName?: string;
  recipientEmail?: string;
  message?: string;
  course: Types.ObjectId;
  payment?: IGiftPayment;
  createdAt: Date;
  updatedAt: Date;
}
