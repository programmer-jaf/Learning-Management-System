/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------
import { Request, Response } from 'express';
import { getCourseService } from '../services/get-course.services';
import { Types } from 'mongoose';

// --------------------------------------------------
// Controller
// --------------------------------------------------
export const GetCourseController = async (req: Request, res: Response) => {
  try {
    const { courseId } = req.params;
    const course = await getCourseService(new Types.ObjectId(courseId));
    res.status(200).json({
      success: true,
      message: 'Get course successful',
      data: {
        course,
      },
    });
  } catch (error) {
    const err = error instanceof Error ? error : new Error('Unknown error');
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
