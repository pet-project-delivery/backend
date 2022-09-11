import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Category } from '../../restaurantItem/schemas/category.schema';
import { Review } from '../../review/schemas/review.schema';
import { RestaurantItem } from 'src/restaurantItem/schemas/restaurantItem.schema';

export type RestaurantDocument = Restaurant & Document;

@Schema()
export class Restaurant {
  @Prop()
  name: string;

  @Prop()
  imageUrl: string;

  @Prop({ default: '0 мин.' })
  timeRange: string;

  @Prop({ default: 0 })
  reviewsAmount: number;

  @Prop({ default: 0 })
  minPrice: number;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    default: [],
  })
  categories: Category[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'RestaurantItem' }],
    default: [],
  })
  items: RestaurantItem[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    default: [],
  })
  reviews: Review[];
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
