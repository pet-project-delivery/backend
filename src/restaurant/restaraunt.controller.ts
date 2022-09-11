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
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { RestaurantService } from './restaraunt.service';

@Controller('/restaurants')
export class RestaurantController {
  constructor(private restaurantService: RestaurantService) {}

  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'image', maxCount: 1 }]))
  create(@UploadedFiles() files, @Body() dto: CreateRestaurantDto) {
    const { image } = files;
    return this.restaurantService.create(dto, image[0]);
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
