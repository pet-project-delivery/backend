import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { FileService, FileType } from 'src/file/file.service';
import { Restaurant } from 'src/restaurant/schemas/restaurant.schema';
import { CreateRestaurantItemDto } from './dto/create-restaurantItem.dto';
import { Category } from './schemas/category.schema';
import { RestaurantItem } from './schemas/restaurantItem.schema';

@Injectable()
export class RestaurantItemService {
  constructor(
    @InjectModel(RestaurantItem.name)
    private restaurantItemModel: Model<RestaurantItem>,
    @InjectModel(Restaurant.name)
    private restaurantModel: Model<Restaurant>,
    @InjectModel(Category.name)
    private categoryModel: Model<Category>,
    private fileService: FileService,
  ) {}

  async create(dto: CreateRestaurantItemDto, image): Promise<RestaurantItem> {
    const imageUrl = this.fileService.createFile(FileType.ITEMS, image);
    const restaurantItem = await this.restaurantItemModel.create({
      ...dto,
      imageUrl,
    });
    const restaurant = await this.restaurantModel.findById(dto.restaurant);
    const isCategoryExist = await this.categoryModel.find({
      name: restaurantItem.category,
    });

    if (isCategoryExist.length) {
      restaurant.items.push(restaurantItem);
      await restaurant.save();

      return restaurantItem;
    } else {
      const category = await this.categoryModel.create({
        name: restaurantItem.category,
        restaurant: restaurant._id,
      });

      restaurant.items.push(restaurantItem);
      restaurant.categories.push(category);
      await restaurant.save();

      return restaurantItem;
    }
  }

  async getAll(): Promise<RestaurantItem[]> {
    const restaurantItems = await this.restaurantItemModel.find();
    return restaurantItems;
  }

  async delete(id: ObjectId): Promise<RestaurantItem> {
    const restaurantItem = await this.restaurantItemModel.findByIdAndDelete(id);
    const restaurant = await this.restaurantModel
      .findById(restaurantItem.restaurant)
      .populate('items');

    restaurant.items = restaurant.items.filter(
      (el) => el.name !== restaurantItem.name,
    );

    await restaurant.save();
    return restaurantItem;
  }

  async deleteCategory(id: ObjectId): Promise<Category> {
    const category = await this.categoryModel.findByIdAndDelete(id);
    const restaurant = await this.restaurantModel
      .findById(category.restaurant)
      .populate('categories');

    restaurant.categories = restaurant.categories.filter(
      (el) => el.name !== category.name,
    );

    await restaurant.save();
    return category;
  }

  async getAllCategories(): Promise<Category[]> {
    const categories = await this.categoryModel.find();
    return categories;
  }
}
