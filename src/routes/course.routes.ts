/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node-Modules
// --------------------------------------------------
import { isAuthenticated } from '@middlewares/auth.middlewares';
import { getAllCourseController } from '@modules/course/v1/controller/get-all-course.controller';
import { GetCourseController } from '@modules/course/v1/controller/get-course.controller';
import { Router } from 'express';

// --------------------------------------------------
// Initialize Router
// --------------------------------------------------
const router = Router();

// --------------------------------------------------
// Course Public Routes
// --------------------------------------------------
router.get('/', getAllCourseController);
router.get('/:courseId', isAuthenticated, GetCourseController);
// router.get('/:courseId/related');
// router.get('/:courseId/instructor');
// router.get('/:courseId/reviews');
// router.get('/:courseId/feedback');

// --------------------------------------------------
// Course Enrollment & Purchase Routes
// --------------------------------------------------
// router.post('/:courseId/enroll');
// router.post('/:courseId/add-to-cart');
// router.post('/:courseId/buy');
// router.post('/:courseId/gift');
// router.post('/:courseId/wishlist');

// --------------------------------------------------
// Export Router
// --------------------------------------------------

export default router;
