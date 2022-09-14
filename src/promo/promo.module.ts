import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { PromoController } from './promo.controller';
import { PromoService } from './promo.servise';
import { Promo, promoSchema } from './schema/promo.schema';
import { FileService } from 'src/file/file.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Promo.name, schema: promoSchema }]),
  ],
  controllers: [PromoController],
  providers: [PromoService, FileService],
})
export class PromoModule {}
