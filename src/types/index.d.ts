import 'express-serve-static-core';

declare module 'express-serve-static-core' {
  interface Request {
    cookies: { [key: string]: string };
    user?: {
      id: string;
      role: 'admin' | 'instructor' | 'student';
    };
  }
}
