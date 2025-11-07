/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node-Modules
// --------------------------------------------------
import { Router } from 'express';

// --------------------------------------------------
// Initialize Router
// --------------------------------------------------
const router = Router();

// --------------------------------------------------
// Instructor Course Routes
// --------------------------------------------------
router.post('/course/');
router.post('/course/:courseId');
router.delete('/course/:courseId');

// --------------------------------------------------
// Instructor Dashboard Routes
// --------------------------------------------------
router.get('/dashboard');
router.get('/dashboard/revenue');
router.get('/dashboard/overview');
router.get('/dashboard/ratings');

// --------------------------------------------------
//  Instructor Earning Routes
// --------------------------------------------------
router.get('/earnings');
router.get('/withdraw');
router.get('/withdraw-history');
// --------------------------------------------------
//  Instructor Message Routes
// --------------------------------------------------
router.get('/chat');
router.post('/chat/:studentId');

// --------------------------------------------------
//  Instructor Settings Routes
// --------------------------------------------------
router.put('/settings/profile');
router.put('/settings/socials');
router.put('/settings/notifications');
router.put('/settings/change-password');
// --------------------------------------------------
//  Export Router
// --------------------------------------------------
export default router;
