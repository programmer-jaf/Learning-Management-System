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

import { ILaunch } from '@interfaces/launch.interfaces';

// --------------------------------------------------
// Launch Schema
// --------------------------------------------------

const launchSchema = new Schema<ILaunch>(
  {
    courseId: {
      type: Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
    },
    launchDate: {
      type: Date,
      required: true,
    },
    isLaunched: {
      type: Boolean,
      default: false,
    },
    notificationsSent: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// --------------------------------------------------
// Launch Model
// --------------------------------------------------
export const LaunchModel = model<ILaunch>('Launch', launchSchema);
