import { Types } from 'mongoose';

export interface IProgress extends Document {
  user: Types.ObjectId;
  course: Types.ObjectId;
  completedLectures: Types.ObjectId[];
  progressPercentage: number;
  createdAt: Date;
  updatedAt: Date;
}
