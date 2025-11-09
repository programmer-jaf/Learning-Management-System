// src/types/express/index.d.ts
import { Types } from 'mongoose';

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: Types.ObjectId;
        role: 'admin' | 'instructor' | 'student';
      };
    }
  }
}

export {};
