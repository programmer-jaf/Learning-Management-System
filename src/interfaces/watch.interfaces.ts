/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------
import { Document, Types } from 'mongoose';

export interface IWatchItem extends Document {
  userId: Types.ObjectId;
  courseId: Types.ObjectId;
  lectureId?: Types.ObjectId; // optional if tracking specific lecture
  progress: number; // percentage completed, e.g., 0-100
  lastWatchedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}
