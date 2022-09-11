import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateRestaurantItemDto } from './dto/create-restaurantItem.dto';
import { RestaurantItemService } from './restaurantItem.service';

@Controller('/restaurantItems')
export class RestaurantItemController {
  constructor(private restaurantItemService: RestaurantItemService) {}

  @Post()
  create(@Body() dto: CreateRestaurantItemDto) {
    return this.restaurantItemService.create(dto);
  }

  @Get()
  getAll() {
    return this.restaurantItemService.getAll();
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.restaurantItemService.delete(id);
  }

  @Delete('/categories/:id')
  deleteCategory(@Param('id') id: ObjectId) {
    return this.restaurantItemService.deleteCategory(id);
  }

  @Get('/categories')
  getAllCategories() {
    return this.restaurantItemService.getAllCategories();
  }
}
