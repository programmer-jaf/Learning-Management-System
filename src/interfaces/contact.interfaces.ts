/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node Modules
// --------------------------------------------------

import { Document } from 'mongoose';

export interface IContact extends Document {
  firstName: string;
  lastName?: string;
  email: string;
  message: string;
  status?: 'pending' | 'read' | 'resolved';
  createdAt: Date;
  updatedAt: Date;
}
