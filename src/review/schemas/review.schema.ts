import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Restaurant } from '../../restaurant/schemas/restaurant.schema';

export type ReviewDocument = Review & Document;

@Schema()
export class Review {
  @Prop()
  text: string;

  @Prop()
  rating: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' })
  restaurant: Restaurant;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
