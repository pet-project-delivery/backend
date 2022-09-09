import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId, Document } from 'mongoose';

export type userDocument = User & Document;

@Schema()
export class User {
  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  likedRestaurants: ObjectId[];

  @Prop()
  likedShops: ObjectId[];
}

export const userSchema = SchemaFactory.createForClass(User);
