/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------
import bcrypt from 'bcrypt';

// --------------------------------------------------
// Constants
// --------------------------------------------------
const SALT_ROUND = 10;

/**
 * Hash a plain-text password
 * @param password - The plain text password to hash
 * @returns Promise that resolves to the hashed password
 */
export const hashedPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, SALT_ROUND);
};

/**
 * Compare a plain-text password with hashed password
 * @param password - The plain text password provided by user
 * @param hashedPassword -  The hashed password stored in DB
 * @returns Promises that resolves to a boolean (true if match),false otherwise
 */
export const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword);
};
