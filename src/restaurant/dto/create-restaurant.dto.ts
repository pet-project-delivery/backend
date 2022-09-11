import { ObjectId } from 'mongoose';

export class CreateRestaurantDto {
  readonly name: string;
  readonly imageUrl: string;
}
