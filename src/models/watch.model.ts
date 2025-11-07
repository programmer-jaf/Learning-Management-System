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
import { IWatchItem } from '@interfaces/watch.interfaces';

// --------------------------------------------------
// Progress Schema
// --------------------------------------------------
const watchSchema = new Schema<IWatchItem>(
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
    lectureId: {
      type: Schema.Types.ObjectId,
      ref: 'Curriculum.lectures',
    },
    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    lastWatchedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// Optional: prevent duplicate watch entries for same user/course/lecture
watchSchema.index({ userId: 1, courseId: 1, lectureId: 1 }, { unique: true });

// --------------------------------------------------
// Progress Model
// --------------------------------------------------
export const WatchModel = model<IWatchItem>('Watch', watchSchema);
