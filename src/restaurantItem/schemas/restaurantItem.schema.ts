import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';
import { Restaurant } from '../../restaurant/schemas/restaurant.schema';

export type RestaurantItemDocument = RestaurantItem & Document;

@Schema()
export class RestaurantItem {
  @Prop()
  name: string;

  @Prop()
  imageUrl: string;

  @Prop()
  category: string;

  @Prop()
  price: number;

  @Prop()
  weight: number;

  @Prop()
  calories: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' })
  restaurant: Restaurant;
}

export const RestaurantItemSchema =
  SchemaFactory.createForClass(RestaurantItem);
