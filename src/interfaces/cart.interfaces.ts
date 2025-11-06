import { Document, Types } from 'mongoose';

export interface ICart extends Document {
  user: Types.ObjectId;
  items: [course: Types.ObjectId, price: number];
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}
