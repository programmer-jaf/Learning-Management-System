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
// Launch Course Notification Routes
// --------------------------------------------------
router.get('/');
router.post('/mark-as-read/:id');
router.delete('/:id');

// --------------------------------------------------
// Export Router
// --------------------------------------------------
export default router;
