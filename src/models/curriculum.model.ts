/**
 * Copyright 2025 Programmer-Jaf
 * @license Apache-2.0
 */

// --------------------------------------------------
// Node-Modules
// --------------------------------------------------
import { Schema, model } from 'mongoose';

// --------------------------------------------------
// Custom-Modules
// --------------------------------------------------
import { ISection } from '@interfaces/curriculum.interfaces';

// --------------------------------------------------
// Section Schema
// --------------------------------------------------
const curriculumSchema = new Schema<ISection>(
  {
    course: {
      type: Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    lectures: [
      {
        title: {
          type: String,
        },
        videoUrl: {
          type: String,
        },
        description: {
          type: String,
        },
        notes: {
          type: String,
        },
        attachments: [String],
      },
    ],
  },
  { timestamps: true }
);

// --------------------------------------------------
// Section Model
// --------------------------------------------------
export const CurriculumModel = model<ISection>('Curriculum', curriculumSchema);
