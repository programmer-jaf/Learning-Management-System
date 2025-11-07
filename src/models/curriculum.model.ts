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
// Curriculum Schema
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
          required: true,
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
        attachments: [
          {
            type: String,
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

// --------------------------------------------------
// Curriculum Model
// --------------------------------------------------
export const CurriculumModel = model<ISection>('Curriculum', curriculumSchema);
