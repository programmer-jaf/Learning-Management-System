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
// Public Review Routes
// --------------------------------------------------
router.get('/:courseId');
router.get('/:review/:reviewId');

// --------------------------------------------------
// Authenticated Routes
// --------------------------------------------------
router.post('/:courseId'); // TODO: WRITE REVIEW CONTROLLER
router.put('/:reviewId'); // TODO: WRITE UPDATE CONTROLLER
router.delete('/:reviewId'); // TODO: WRITE DELETE CONTROLLER

// --------------------------------------------------
// Export Router
// --------------------------------------------------
export default router;
