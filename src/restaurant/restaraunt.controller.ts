import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { RestaurantService } from './restaraunt.service';

@Controller('/restaurants')
export class RestaurantController {
  constructor(private restaurantService: RestaurantService) {}

  @Post()
  create(@Body() dto: CreateRestaurantDto) {
    return this.restaurantService.create(dto);
  }

  @Get()
  getAll() {
    return this.restaurantService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.restaurantService.getOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.restaurantService.delete(id);
  }
}
