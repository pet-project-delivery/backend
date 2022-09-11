import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Restaurant,
  RestaurantSchema,
} from 'src/restaurant/schemas/restaurant.schema';
import { RestaurantItemController } from './restaurantItem.controller';
import { RestaurantItemService } from './restaurantItem.service';
import { Category, CategorySchema } from './schemas/category.schema';
import {
  RestaurantItem,
  RestaurantItemSchema,
} from './schemas/restaurantItem.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: RestaurantItem.name,
        schema: RestaurantItemSchema,
      },
      { name: Restaurant.name, schema: RestaurantSchema },
      { name: Category.name, schema: CategorySchema },
    ]),
  ],
  controllers: [RestaurantItemController],
  providers: [RestaurantItemService],
})
export class RestaurantItemModule {}
