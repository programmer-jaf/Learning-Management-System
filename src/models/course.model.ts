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
import { ICourse } from '@interfaces/course.interfaces';

// --------------------------------------------------
// Course Schema
// --------------------------------------------------

const courseSchema = new Schema<ICourse>(
  {
    instructor: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    introVideo: {
      type: String,
    },
    description: {
      details: {
        type: String,
      },
      whatYouWillLearn: {
        type: [String],
      },
      whoThisCourseFor: {
        type: [String],
      },
      requirements: {
        type: [String],
      },
    },
    category: {
      type: String,
    },
    subCategory: {
      type: String,
    },
    language: {
      type: String,
    },
    level: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
    },
    duration: {
      type: String,
    },
    discountPrice: {
      type: String,
    },
    enrolledStudent: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
    reviewsContent: {
      type: Number,
      default: 0,
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// --------------------------------------------------
// Course Model
// --------------------------------------------------
export const CourseModel = model<ICourse>('Course', courseSchema);
