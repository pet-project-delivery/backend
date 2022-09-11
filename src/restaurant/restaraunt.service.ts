import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Restaurant, RestaurantDocument } from './schemas/restaurant.schema';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectModel(Restaurant.name)
    private restaurantModel: Model<RestaurantDocument>,
  ) {}

  async create(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
    const restaurant = await this.restaurantModel.create(createRestaurantDto);
    return restaurant;
  }

  async getAll(): Promise<Restaurant[]> {
    const restaurants = await this.restaurantModel
      .find()
      .populate('items')
      .populate('categories');
    return restaurants;
  }

  async getOne(id: ObjectId): Promise<Restaurant> {
    const restaurant = await this.restaurantModel.findById(id);
    return restaurant;
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    const restaurant = await this.restaurantModel.findByIdAndDelete(id);
    return restaurant._id;
  }

  async update(id: ObjectId, dto: UpdateRestaurantDto): Promise<Restaurant> {
    const restaurant = await this.restaurantModel.findByIdAndUpdate(id, dto);
    return restaurant;
  }
}
