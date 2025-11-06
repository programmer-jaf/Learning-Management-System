import { Document, Types } from 'mongoose';

export interface ICourse extends Document {
  instructor: Types.ObjectId;
  title: string;
  slug: string;
  description: {
    details: string;
    whatYouWillLearn: string[];
    whoThisCourseFor: string[];
    requirements: string[];
  };
  category: string;
  subCategory: string;
  language: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  discountPrice?: number;
  enrolledStudent: number;
  rating: number;
  reviewsContent: number;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}
