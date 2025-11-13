/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

//--------------------------------------------------
// Node Modules
//--------------------------------------------------
import multer, { FileFilterCallback } from 'multer';
import { Request, Express } from 'express';
// --------------------------------------------------
// Custom Modules
//--------------------------------------------------

// store files in memory temporarily
const storage = multer.memoryStorage();

// optional file filtering
const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  const allowedTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/mp4',
    'application/pdf',
  ];
  if (allowedTypes.includes(file.mimetype) || file.mimetype) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type'));
  }
};

export const upload = multer({
  storage,
  fileFilter,
  limits: {
    fieldSize: 100 * 1024 * 1024, // 100MB
  },
});


