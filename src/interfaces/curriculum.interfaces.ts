/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------
import { Document, Types } from 'mongoose';

export interface ILecture {
  title: string;
  videoUrl?: string;
  description?: string;
  notes?: string;
  attachments?: string[];
}

export interface ISection extends Document {
  course: Types.ObjectId;
  title: string;
  lectures: ILecture[];
  createdAt: Date;
  updatedAt: Date;
}
