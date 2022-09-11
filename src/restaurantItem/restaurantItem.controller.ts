import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ObjectId } from 'mongoose';
import { CreateRestaurantItemDto } from './dto/create-restaurantItem.dto';
import { RestaurantItemService } from './restaurantItem.service';

@Controller('/restaurantItems')
export class RestaurantItemController {
  constructor(private restaurantItemService: RestaurantItemService) {}

  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'image', maxCount: 1 }]))
  create(@UploadedFiles() files, @Body() dto: CreateRestaurantItemDto) {
    const { image } = files;
    return this.restaurantItemService.create(dto, image[0]);
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
