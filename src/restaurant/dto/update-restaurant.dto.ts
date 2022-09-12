import { ObjectId } from 'mongoose';

export class UpdateRestaurantDto {
  readonly name: string;
  readonly minPrice: number;
  readonly imageUrl: string;
  readonly timeRange: string;
  readonly reviewsAmount: number;
  readonly reviews: ObjectId[];
  readonly categories: ObjectId[];
  readonly items: ObjectId[];
}
