/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------
import { CourseModel } from '@models/course.model';
import { Types } from 'mongoose';

// --------------------------------------------------
// GetCourseService
// --------------------------------------------------
export const getCourseService = async (courseId: Types.ObjectId) => {
  try {
    // check if course exists
    const existingCourse = await CourseModel.findById(courseId);
    if (!existingCourse) {
      throw new Error('Course not found');
    }
    // get course
    const course = await CourseModel.findById(courseId);
    // return course
    return course;
  } catch (error) {
    const err = error as Error;
    throw new Error(err.message);
  }
};
