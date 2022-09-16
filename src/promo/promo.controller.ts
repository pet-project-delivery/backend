import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { CreatePromoDto } from './dto/create-promo.dto';
import { PromoService } from './promo.servise';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('promos')
export class PromoController {
  constructor(private promoService: PromoService) {}

  @Get()
  getAllPromos() {
    return this.promoService.getAllPromos();
  }

  @Get(':id')
  getOnePromo(@Param('id') id: string) {
    return this.promoService.getOnePromo(id);
  }

  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'image', maxCount: 1 }]))
  createPromo(@Body() promoDto: CreatePromoDto, @UploadedFiles() files) {
    const { image } = files;
    return this.promoService.create(promoDto, image[0]);
  }
}
