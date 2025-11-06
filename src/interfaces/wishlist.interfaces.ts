import { Document, Types } from 'mongoose';

export interface IWishlist extends Document {
  user: Types.ObjectId;
  course: Types.ObjectId;
  createdAt: Date;
}
