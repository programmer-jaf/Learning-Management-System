/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------
import { Document, Types } from 'mongoose';

export interface ILaunch extends Document {
  courseId: Types.ObjectId;
  launchDate: Date; // scheduled launch
  isLaunched: boolean; // true if course is live
  notificationsSent?: boolean; // optional, track if notifications sent
  createdAt: Date;
  updatedAt: Date;
}

export interface INotification extends Document {
  userId: Types.ObjectId;
  message: string;
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
}
