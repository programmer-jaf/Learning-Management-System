/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------

import { Types } from 'mongoose';

export interface IProgress extends Document {
  user: Types.ObjectId;
  course: Types.ObjectId;
  completedLectures: Types.ObjectId[];
  progressPercentage: number;
  createdAt: Date;
  updatedAt: Date;
}
