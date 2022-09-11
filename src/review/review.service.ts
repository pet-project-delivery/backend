import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import {
  Restaurant,
  RestaurantDocument,
} from 'src/restaurant/schemas/restaurant.schema';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review, ReviewDocument } from './schemas/review.schema';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(Review.name)
    private reviewModel: Model<ReviewDocument>,
    @InjectModel(Restaurant.name)
    private restaurantModel: Model<RestaurantDocument>,
  ) {}

  async create(dto: CreateReviewDto): Promise<Review> {
    const review = await this.reviewModel.create(dto);
    const restaurant = await this.restaurantModel.findById(dto.restaurant);

    restaurant.reviews.push(review);
    restaurant.reviewsAmount = restaurant.reviews.length;
    await restaurant.save();

    return review;
  }

  async getAll(): Promise<Review[]> {
    const reviews = await this.reviewModel.find();
    return reviews;
  }

  async getAllForOneRestaurant(restaurant: ObjectId): Promise<Review[]> {
    const reviews = await this.reviewModel.find({ restaurant });
    return reviews;
  }
}
