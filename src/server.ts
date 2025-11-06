/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------
import { Server } from 'http';

// --------------------------------------------------
// Custom Modules
// --------------------------------------------------
import app from './app'; // your existing app.ts
import { ENV } from '@config/env.config';
import {
  connectDB,
  disconnectDB,
  handleDBShutdownSignals,
} from '@config/db.config';
import { logger } from '@lib/logger';

// --------------------------------------------------
// Server instance
// --------------------------------------------------
let server: Server;

// --------------------------------------------------
// Graceful Shutdown
// --------------------------------------------------
const shutdown = async (signal: string) => {
  logger.info(`\n⚙️ Received ${signal}. Shutting down server...`);
  try {
    if (server) {
      server.close(() => {
        logger.info('🛑 Express server closed');
      });
    }
    await disconnectDB();
    process.exit(0);
  } catch (error) {
    logger.error(`❌ Error during shutdown (${signal}):`);
    console.error(error);
    process.exit(1);
  }
};

// Listen to termination signals
process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));

// --------------------------------------------------
// Start Server & Connect to DB
// --------------------------------------------------
const startServer = async () => {
  try {
    await connectDB();
    handleDBShutdownSignals(); // Optional: handles extra DB signals if used
    server = app.listen(ENV.PORT, () => {
      logger.info(`🚀 Server running on http://localhost:${ENV.PORT}`);
    });

    server.on('error', (err: Error) => {
      logger.error('❌ Server error:');
      console.error(err);
      process.exit(1);
    });
  } catch (error) {
    logger.error('❌ Failed to start server:');
    console.error(error);
    process.exit(1);
  }
};

// --------------------------------------------------
// Launch Server
// --------------------------------------------------
startServer();
