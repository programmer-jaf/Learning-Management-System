/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

import { Request, Response } from 'express';
import { createCourseService } from '../services/create-course.services';
import { Types } from 'mongoose';

// --------------------------------------------------
// Extend Express Request to include user
// --------------------------------------------------
interface AuthenticatedRequest extends Request {
  user?: {
    id: Types.ObjectId;
    role: 'student' | 'instructor' | 'admin';
  };
}

// --------------------------------------------------
// CreateCourseController
// --------------------------------------------------
export const CreateCourseController = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const user = req.user;
    // Check instructor authorization

    if (user?.role !== 'instructor') {
      return res.status(403).json({
        success: false,
        message: 'You are not authorized to create a course',
      });
    }

    const {
      title,
      subtitle,
      category,
      subCategory,
      language,
      level,
      duration,
      status,
    } = req.body;

    // Validate required fields
    if (
      !title ||
      !subtitle ||
      !category ||
      !subCategory ||
      !language ||
      !level ||
      !duration ||
      !status
    ) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }

    // Create course
    const course = await createCourseService(
      {
        title,
        subtitle,
        category,
        subCategory,
        language,
        level,
        duration: Number(duration),
        status,
      },
      user.id
    );

    res.status(201).json({
      success: true,
      message: 'Course created successfully',
      data: course,
    });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
