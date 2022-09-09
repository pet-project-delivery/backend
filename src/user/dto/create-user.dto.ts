import { ObjectId } from 'mongoose';

export class createUserDto {
  readonly email: string;
  readonly password: string;
  readonly likedRestaurants: ObjectId[];
  readonly likedShops: ObjectId[];
}
