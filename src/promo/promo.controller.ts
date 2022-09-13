import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreatePromoDto } from './dto/create-promo.dto';
import { PromoService } from './promo.servise';

@Controller('promo')
export class PromoController {
  constructor(private promoService: PromoService) {}

  @Get()
  getAllPromos() {
    return this.promoService.getAllPromos;
  }

  @Get(':id')
  getOnePromo(@Param('id') id: string) {
    return this.promoService.getOnePromo(id);
  }

  @Post()
  createPromo(@Body() promoDto: CreatePromoDto) {
    return this.promoService.create(promoDto);
  }
}
