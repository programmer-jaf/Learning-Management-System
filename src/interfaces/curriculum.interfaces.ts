import { Document, Types } from 'mongoose';
export interface ISection extends Document {
  course: Types.ObjectId;
  title: string;
  lectures: {
    title: string;
    videoUrl?: string;
    description?: string;
    notes?: string;
    attachments?: string[];
  }[];
  createdAt: Date;
  updatedAt: Date;
}
