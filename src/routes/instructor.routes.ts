/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node-Modules
// --------------------------------------------------
import { isAuthenticated } from '@middlewares/auth.middlewares';
import { upload } from '@middlewares/multer.middlewares';
import { CreateCourseController } from '@modules/course/v1/controller/create-course.controller';
import { Router } from 'express';

// --------------------------------------------------
// Initialize Router
// --------------------------------------------------
const router = Router();

// --------------------------------------------------
// Instructor Course Routes
// --------------------------------------------------
router.post('/courses', isAuthenticated, upload.none(), CreateCourseController);
// router.post('/courses/:courseId');
// router.delete('/courses/:courseId');

// --------------------------------------------------
// Instructor Dashboard Routes
// --------------------------------------------------
// router.get('/dashboard');
// router.get('/dashboard/revenue');
// router.get('/dashboard/overview');
// router.get('/dashboard/ratings');

// --------------------------------------------------
//  Instructor Earning Routes
// --------------------------------------------------
// router.get('/earnings');
// router.get('/withdraw');
// router.get('/withdraw-history');
// --------------------------------------------------
//  Instructor Message Routes
// --------------------------------------------------
// router.get('/chat');
// router.post('/chat/:studentId');

// --------------------------------------------------
//  Instructor Settings Routes
// --------------------------------------------------
// router.put('/settings/profile');
// router.put('/settings/social');
// router.put('/settings/notifications');
// router.put('/settings/change-password');
// --------------------------------------------------
//  Export Router
// --------------------------------------------------
export default router;
