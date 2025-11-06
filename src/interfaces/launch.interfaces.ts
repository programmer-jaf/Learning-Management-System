/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------

import { Document, Types } from 'mongoose';
export interface ILaunch extends Document {
  course: Types.ObjectId;
  launchDate: Date;
  notifiedUsers: string[];
  isNotified?: boolean;
  createdAt: Date;
}
