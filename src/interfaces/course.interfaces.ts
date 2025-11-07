/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node-Modules
// --------------------------------------------------
import { Types, Document } from 'mongoose';

// --------------------------------------------------
// Custom-Modules
// --------------------------------------------------

export interface ICourse extends Document {
  instructor: Types.ObjectId;
  title: string;
  slug: string;
  introVideo?: string;

  description: {
    details: string;
    whatYouWillLearn: string[];
    whoThisCourseFor: string[];
    requirements: string[];
  };

  category?: string;
  subCategory?: string;
  language?: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration?: string;

  price: number; // base price
  discountPrice?: number; // optional discounted price

  enrolledStudents: number;
  curriculum?: Types.ObjectId[]; // populate Curriculum
  reviews?: Types.ObjectId[]; // populate Reviews
  rating: number;
  reviewsCount: number;

  published: boolean;

  createdAt: Date;
  updatedAt: Date;
}
