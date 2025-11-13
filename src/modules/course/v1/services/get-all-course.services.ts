/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------
import { CourseModel } from '@models/course.model';

// --------------------------------------------------
// GetAllCourseService
// --------------------------------------------------
export const getAllCourseService = async () => {
  try {
    const courses = await CourseModel.find();
    return courses;
  } catch (error) {
    const err = error as Error;
    throw new Error(err.message);
  }
};