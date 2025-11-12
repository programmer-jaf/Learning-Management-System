/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node-Modules
// --------------------------------------------------
import { Router } from 'express';

// --------------------------------------------------
// Custom-Modules
// --------------------------------------------------
import { signupController } from '@modules/auth/v1/controller/signup.controller';
import { signinController } from '@modules/auth/v1/controller/signin.controller';
import { signoutController } from '@modules/auth/v1/controller/signout.controller';
import { isAuthenticated } from '@middlewares/auth.middlewares';
import { authMeController } from '@modules/auth/v1/controller/auth.me.controller';
import { refreshAccessTokenController } from '@modules/auth/v1/controller/refreshAccessToken.controller';

// --------------------------------------------------
// Initialize Router
// --------------------------------------------------
const router = Router();

// --------------------------------------------------
// Auth Routes
// --------------------------------------------------
router.post('/signup', signupController);
router.post('/signin', signinController);
router.post('/signout', isAuthenticated, signoutController);
router.post('/me', isAuthenticated, authMeController);
// router.post('/forgot-password');
// router.post('/reset-password');
router.post('/refresh-token', isAuthenticated, refreshAccessTokenController);

// --------------------------------------------------
// Export Router
// --------------------------------------------------
export default router;
