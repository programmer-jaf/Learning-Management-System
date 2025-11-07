/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------
import { Router } from 'express';

// --------------------------------------------------
// Custom Routers
// --------------------------------------------------
import authRouter from './auth.routes'; // Authentication
import userRouter from './user.routes'; // User profile & settings
import userDashboardRouter from './user.dashboard.routes'; // Student dashboard
import instructorRouter from './instructor.routes'; // Instructor routes
import courseRouter from './course.routes'; // Courses
import reviewRouter from './review.routes'; // Reviews
import giftRouter from './gift.course.routes'; // Gift courses
import wishlistRouter from './wishlist.routes'; // Wishlist
import watchRouter from './watch.routes'; // Course watch/lectures
import launchRouter from './launch.routes'; // Notifications / Launch
import adminRouter from './admin.routes'; // Admin panel

// --------------------------------------------------
// Initialize Router
// --------------------------------------------------
const router = Router();

// --------------------------------------------------
// Authentication Routes
// /api/v1/auth
// --------------------------------------------------
router.use('/auth', authRouter);

// --------------------------------------------------
// User Routes
// /api/v1/users
// --------------------------------------------------
router.use('/users', userRouter);

// --------------------------------------------------
// User Dashboard Routes
// /api/v1/user-dashboard
// --------------------------------------------------
router.use('/user-dashboard', userDashboardRouter);

// --------------------------------------------------
// Instructor Routes
// /api/v1/instructors
// --------------------------------------------------
router.use('/instructors', instructorRouter);

// --------------------------------------------------
// Courses
// /api/v1/courses
// --------------------------------------------------
router.use('/courses', courseRouter);

// --------------------------------------------------
// Reviews
// /api/v1/reviews
// --------------------------------------------------
router.use('/reviews', reviewRouter);

// --------------------------------------------------
// Gift Courses
// /api/v1/gift
// --------------------------------------------------
router.use('/gift', giftRouter);

// --------------------------------------------------
// Wishlist
// /api/v1/wishlist
// --------------------------------------------------
router.use('/wishlist', wishlistRouter);

// --------------------------------------------------
// Watch / Lectures
// /api/v1/watch
// --------------------------------------------------
router.use('/watch', watchRouter);

// --------------------------------------------------
// Launch / Notifications
// /api/v1/launch
// --------------------------------------------------
router.use('/launch', launchRouter);

// --------------------------------------------------
// Admin Panel
// /api/v1/admin
// --------------------------------------------------
router.use('/admin', adminRouter);

// --------------------------------------------------
// Export Central Router
// --------------------------------------------------
export default router;
