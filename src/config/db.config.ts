/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node-Modules
// --------------------------------------------------
import mongoose, { connect, ConnectOptions, disconnect } from 'mongoose';
import { ServerApiVersion } from 'mongodb';

// --------------------------------------------------
// Custom Modules
// --------------------------------------------------
import { ENV } from '@config/env.config';

// --------------------------------------------------
// Client Options
// --------------------------------------------------
const clientOptions: ConnectOptions = {
  dbName: 'Learning-Management-System',
  appName: 'Learning-Management-System',
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

// --------------------------------------------------
// MongoDB Connection
// --------------------------------------------------
export const connectDB = async (): Promise<void> => {
  try {
    const conn = await connect(ENV.MONGO_URI, clientOptions);
    console.log(
      `✅ MongoDB Connected: ${conn.connection.host}/${conn.connection.name}`
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(`❌ MongoDB connection Failed: ${error.message}`);
    } else {
      console.error(`❌ MongoDB connection Failed: Unknown error occurred`);
    }
    process.exit(1);
  }
};

// --------------------------------------------------
// MongoDB Disconnect
// --------------------------------------------------
export const disconnectDB = async (): Promise<void> => {
  try {
    await disconnect();
    console.log(`🛑 MongoDB Disconnected Successfully`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`⚠️ MongoDB Disconnect Error: ${error.message}`);
    } else {
      console.error(`⚠️ MongoDB Disconnect Error: Unknown error occurred`);
    }
  }
};

// --------------------------------------------------
// Graceful Shutdown
// --------------------------------------------------
const gracefulShutdown = async (signal: string): Promise<void> => {
  try {
    await mongoose.connection.close();
    console.log(`🧩 MongoDB connection closed due to ${signal}`);
    process.exit(0);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`❌ Error during MongoDB shutdown (${signal}): ${error}`);
    } else {
      console.error(`❌ Error during MongoDB shutdown (${signal})`);
    }
    process.exit(1);
  }
};

export const handleDBShutdownSignals = (): void => {
  process.on('SIGINT', async () => {
    console.log(`\n⚙️ Received SIGINT signal. Closing MongoDB Connection..`);
    await gracefulShutdown('SIGINT');
  });

  process.on('SIGTERM', async () => {
    console.log(`\n⚙️ Received SIGTERM signal. Closing MongoDB Connection..`);
    await gracefulShutdown('SIGTERM');
  });
};
