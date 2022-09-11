import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantModule } from './restaurant/restaraunt.module';
import { RestaurantItemModule } from './restaurantItem/restaurantItem.module';
import { ReviewModule } from './review/review.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    RestaurantModule,
    ReviewModule,
    RestaurantItemModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:123321@cluster0.gacfoio.mongodb.net/delivery?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}
