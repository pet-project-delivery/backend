import { ObjectId } from 'mongoose';

export class CreateRestaurantDto {
  readonly name: string;
  readonly type: 'shop' | 'restaurant';
}
