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

const courseSchema = new Schema<ICourse>(
  {
    instructor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true },
    introVideo: { type: String },
    description: {
      details: { type: String },
      whatYouWillLearn: [{ type: String }],
      whoThisCourseFor: [{ type: String }],
      requirements: [{ type: String }],
    },
    category: {
      type: String,
      trim: true,
    },
    subCategory: {
      type: String,
      trim: true,
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
    price: {
      type: Number,
      default: 0,
    },
    discountPrice: {
      type: Number,
      default: 0,
    },
    enrolledStudents: {
      type: Number,
      default: 0,
    },
    curriculum: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Curriculum',
      },
    ],
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Review',
      },
    ],
    rating: {
      type: Number,
      default: 0,
    },
    reviewsCount: {
      type: Number,
      default: 0,
    },
    published: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ['draft', 'published'],
      default: 'draft',
    },
    launchTimer: {
      type: Boolean,
      default: null,
    },
  },
  { timestamps: true }
);

// Add text index for search
courseSchema.index({ title: 'text', category: 1, subCategory: 1 });

export const CourseModel = model<ICourse>('Course', courseSchema);
