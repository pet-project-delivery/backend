import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Restaurant } from 'src/restaurant/schemas/restaurant.schema';
export type promoDocument = Promo & Document;

@Schema()
export class Promo {
  @Prop({ unique: true })
  url: string;

  @Prop()
  promocode: '';

  @Prop()
  name: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' }],
    default: [],
  })
  restaurants: Restaurant[];
}

export const promoSchema = SchemaFactory.createForClass(Promo);
