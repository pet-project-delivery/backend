import { ObjectId } from 'mongoose';

export class CreateRestaurantItemDto {
  readonly name: string;
  readonly price: number;
  readonly category: ObjectId;
  readonly weight: number;
  readonly calories: number;
  readonly restaurant: ObjectId;
}
