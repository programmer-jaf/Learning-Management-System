/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node-Modules
// --------------------------------------------------
import { signupController } from '@modules/auth/v1/controller/signup.controller';
import { Router } from 'express';

// --------------------------------------------------
// Initialize Router
// --------------------------------------------------
const router = Router();

// --------------------------------------------------
// Auth Routes
// --------------------------------------------------
router.post('/signup', signupController);
// router.post('/signin');
// router.post('/signout');
// router.post('/forgot-password');
// router.post('/reset-password');
// router.post('/refresh-token');

// --------------------------------------------------
// Export Router
// --------------------------------------------------
export default router;
