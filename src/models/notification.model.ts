/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------
import { model, Schema } from 'mongoose';

// --------------------------------------------------
// Custom Modules
// --------------------------------------------------
import { INotification } from '@interfaces/notification.interfaces';

// --------------------------------------------------
// Notification Schema
// --------------------------------------------------
const notificationSchema = new Schema<INotification>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    read: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'system',
    },
  },
  {
    timestamps: true,
  }
);
// --------------------------------------------------
// Notification Schema
// --------------------------------------------------
export const NotificationModel = model<INotification>(
  'Notification',
  notificationSchema
);
