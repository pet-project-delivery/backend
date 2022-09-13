import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { FileModule } from './file/file.module';
import { RestaurantModule } from './restaurant/restaraunt.module';
import { RestaurantItemModule } from './restaurantItem/restaurantItem.module';
import { ReviewModule } from './review/review.module';
import { UserModule } from './user/user.module';
import { PromoModule } from './promo/promo.module';

@Module({
  imports: [
    PromoModule,
    UserModule,
    RestaurantModule,
    ReviewModule,
    RestaurantItemModule,
    FileModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:123321@cluster0.gacfoio.mongodb.net/delivery?retryWrites=true&w=majority',
    ),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
  ],
})
export class AppModule {}
