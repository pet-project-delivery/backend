import { ObjectId } from 'mongoose';

export class updateUserDto {
  readonly email: string;
  readonly password: string;
  readonly likedRestaurants: ObjectId[];
  readonly likedShops: ObjectId[];
}
