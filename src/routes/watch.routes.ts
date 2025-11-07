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
// Watch Course Routes
// --------------------------------------------------
router.get('/:courseId/watch');
router.get('/:courseId/watch/lecture/:lectureId');
router.post('/:courseId/watch/lecture/:lectureId/comments');
router.post('/:courseId/review');

// --------------------------------------------------
// Export Router
// --------------------------------------------------

export default router;
