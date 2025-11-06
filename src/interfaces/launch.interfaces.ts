import { Document, Types } from 'mongoose';
export interface ILaunch extends Document {
  course: Types.ObjectId;
  launchDate: Date;
  notifiedUsers: string[];
  isNotified?: boolean;
  createdAt: Date;
}
