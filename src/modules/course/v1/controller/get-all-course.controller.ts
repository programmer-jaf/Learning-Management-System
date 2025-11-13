/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------

// --------------------------------------------------
// Custom Modules
// --------------------------------------------------
import { getAllCourseService } from '../services/get-all-course.services';
import { Request, Response } from 'express';

// --------------------------------------------------
// GetAllCourseController
// --------------------------------------------------
export const getAllCourseController = async (req: Request, res: Response) => {
  try {
    const courses = await getAllCourseService();
    return res.status(200).json(courses);
  } catch (error) {
    const err = error as Error;
    return res.status(500).json({ error: err.message });
  }
};
