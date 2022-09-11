import { ObjectId } from 'mongoose';

export class authUserDto {
  readonly email: string;
  readonly password: string;
  readonly likedRestaurants: ObjectId[];
  readonly likedShops: ObjectId[];
}
