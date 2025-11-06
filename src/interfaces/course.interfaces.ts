/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------

import { Document, Types } from 'mongoose';

export interface ICourse extends Document {
  instructor: Types.ObjectId;
  title: string;
  slug: string;
  description: {
    details: string;
    whatYouWillLearn: string[];
    whoThisCourseFor: string[];
    requirements: string[];
  };
  introVideo?: string;
  category: string;
  subCategory: string;
  language: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  discountPrice?: number;
  enrolledStudent: number;
  rating: number;
  reviewsContent: number;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}
