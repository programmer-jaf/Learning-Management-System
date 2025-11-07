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
import { IContact } from '@interfaces/contact.interfaces';

// --------------------------------------------------
// Contact-Schema
// --------------------------------------------------
const contactSchema = new Schema<IContact>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ['pending', 'read', 'resolved'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);

// --------------------------------------------------
// Contact Model
// --------------------------------------------------
export const ContactModel = model<IContact>('Contact', contactSchema);
