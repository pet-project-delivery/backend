import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewService } from './review.service';

@Controller('/reviews')
export class ReviewController {
  constructor(private reviewService: ReviewService) {}

  @Post()
  create(@Body() dto: CreateReviewDto) {
    return this.reviewService.create(dto);
  }

  @Get()
  getAll() {
    return this.reviewService.getAll();
  }

  @Get(':restaurant')
  getAllForOneRestaurant(@Param('restaurant') restaurant: ObjectId) {
    return this.reviewService.getAllForOneRestaurant(restaurant);
  }
}
