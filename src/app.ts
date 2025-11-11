/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------
import express, { Application } from 'express';
import cors, { CorsOptions } from 'cors';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';

// --------------------------------------------------
// Custom Modules
// --------------------------------------------------
import { ENV } from '@config/env.config';
import { errorHandler } from '@middlewares/error.middlewares';
import v1Routes from '@routes/index.routes';
import { apiLimiter } from '@middlewares/rateLimiter.middlewares';
// --------------------------------------------------
// Initialize Express
// --------------------------------------------------
const app: Application = express();

// --------------------------------------------------
// CORS Configuration
// --------------------------------------------------
const allowedOrigins =
  ENV.NODE_ENV === 'development' ? '*' : ['https://yourdomain.com']; // replace with production domains

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (ENV.NODE_ENV === 'development') {
      callback(null, true); // allow all in dev
    } else {
      if (origin && allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`CORS Error: ${origin} is not allowed`));
      }
    }
  },
  credentials: true, // if using cookies/auth
};
app.use(cors(corsOptions));

// --------------------------------------------------
// Cookie Parser
// --------------------------------------------------
app.use(cookieParser());

// --------------------------------------------------
// Compression
// --------------------------------------------------
app.use(
  compression({
    threshold: 1024, // compress responses over 1kb
  })
);

// --------------------------------------------------
// Helmet for security
// --------------------------------------------------
app.use(helmet());

// --------------------------------------------------
// Morgan for logging
// --------------------------------------------------
if (ENV.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined')); // production logging
}

// --------------------------------------------------
// Body Parsing
// --------------------------------------------------
app.use(
  express.json({
    limit: '10mb',
  })
);
app.use(
  express.urlencoded({
    extended: true,
    limit: '10mb',
  })
);

// --------------------------------------------------
// Serve Static Files
// --------------------------------------------------
app.use(express.static('public'));

// --------------------------------------------------
// Simple Health Check Route
// --------------------------------------------------
app.get('/api/v1/health', (_req, res) => {
  return res.status(200).json({ success: true, message: 'Server is healthy' });
});

// --------------------------------------------------
// API Routes v1
// --------------------------------------------------
app.use('/api/v1', apiLimiter, v1Routes);
// --------------------------------------------------
// Global Error Handler
// --------------------------------------------------
app.use(errorHandler);

export default app;
