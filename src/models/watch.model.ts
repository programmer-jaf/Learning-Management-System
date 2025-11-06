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
import { IProgress } from '@interfaces/watch.interfaces';

// --------------------------------------------------
// Progress Schema
// --------------------------------------------------
const progressSchema = new Schema<IProgress>(
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
    progressPercentage: {
      type: Number,
      default: 0,
    },
    completedLectures: [
      {
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// --------------------------------------------------
// Progress Model
// --------------------------------------------------
export const ProgressModel = model<IProgress>('Progress', progressSchema);
