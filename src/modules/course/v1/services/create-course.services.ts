/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

import { CourseModel } from '@models/course.model';
import { Types } from 'mongoose';
import slugify from 'slugify';

// --------------------------------------------------
// Custom Interface
// --------------------------------------------------
type CourseCategory =
  | 'front-end'
  | 'back-end'
  | 'full-stack'
  | 'web-development'
  | 'app-development'
  | 'ai/ml'
  | 'data-science'
  | 'other';

type CourseLanguage =
  | 'bangla'
  | 'english'
  | 'hindi'
  | 'spanish'
  | 'german'
  | 'french'
  | 'other';

type CourseLevel = 'beginner' | 'intermediate' | 'advanced';
type CourseStatus = 'published' | 'unpublished' | 'draft';

export interface CoursePayload {
  title: string;
  subtitle: string;
  category: CourseCategory;
  subCategory: CourseCategory;
  language: CourseLanguage;
  level: CourseLevel;
  duration: number;
  status: CourseStatus;
}

// --------------------------------------------------
// CreateCourseService
// --------------------------------------------------
export const createCourseService = async (
  payload: CoursePayload,
  instructorId: Types.ObjectId
) => {
  try {
    // generate SEO-Friendly Slug from course title
    let slug = slugify(payload.title, {
      lower: true,
      trim: true,
      strict: true,
    });
    // check for existing slug and make it unique if necessary
    const existingSlug = await CourseModel.findOne({ slug });
    if (existingSlug) {
      const randomSuffix = Math.floor(Math.random() + 1000 * 9000);
      slug = `${slug}-${randomSuffix}`;
    }
    const course = await CourseModel.create({
      ...payload,
      slug,
      instructor: instructorId,
    });
    return course;
  } catch (error) {
    const err = error as Error;
    throw new Error(err.message);
  }
};
