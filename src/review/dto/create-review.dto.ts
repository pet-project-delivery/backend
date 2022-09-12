import { ObjectId } from 'mongoose';

export class CreateReviewDto {
  readonly text: string;
  readonly rating: number;
  readonly restaurant: ObjectId;
}
