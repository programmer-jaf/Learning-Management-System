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
// User Dashboard Routes
// --------------------------------------------------
router.get('/');
router.get('/courses');
router.get('/active');
router.get('/completed');
router.get('/purchase-history');
router.get('/wishlist');
router.get('/messages');
router.get('/settings');

// --------------------------------------------------
// Export Router
// --------------------------------------------------
export default router;
