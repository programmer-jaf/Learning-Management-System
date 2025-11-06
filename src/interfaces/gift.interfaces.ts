import { Document, Types } from 'mongoose';

export interface IGiftCourse extends Document {
  sender: Types.ObjectId;
  recipientName: string;
  recipientEmail: string;
  course: Types.ObjectId;
  message?: string;
  payment: {
    cardName: string;
    cardNumber: string;
    expiry: string;
    cvc: string;
    rememberCard: boolean;
  };
  createdAt: Date;
}
