import { Document } from 'mongoose';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  role: 'student' | 'instructor' | 'admin';
  bio?: string;
  title?: string;
  image?: string;
  social?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    whatsapp?: string;
    youtube?: string;
    website?: string;
  };
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}
