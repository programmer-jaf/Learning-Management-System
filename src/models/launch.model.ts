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
    course: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Course',
    },
    launchDate: {
      type: Date,
      required: true,
    },
    isNotified: {
      type: Boolean,
      default: false,
    },
    notifiedUsers: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

// --------------------------------------------------
// Launch Model
// --------------------------------------------------
export const LaunchModel = model<ILaunch>('Launch', launchSchema);
