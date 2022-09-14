import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Promo, promoDocument } from './schema/promo.schema';
import { Injectable } from '@nestjs/common/decorators';
import { CreatePromoDto } from './dto/create-promo.dto';
import { FileService, FileType } from 'src/file/file.service';

@Injectable()
export class PromoService {
  constructor(
    @InjectModel(Promo.name)
    private promoModel: Model<promoDocument>,
    private fileService: FileService,
  ) {}

  async getOnePromo(id: string): Promise<Promo> {
    return await await this.promoModel.findById(id).populate('restaurants');
  }

  async create(createPromoDto: CreatePromoDto, image): Promise<Promo> {
    const restaurants = JSON.parse(createPromoDto.restaurants);
    const url = this.fileService.createFile(FileType.PROMOS, image);
    const promo = await (
      await this.promoModel.create({ ...createPromoDto, restaurants, url })
    ).populate('restaurants');
    return promo;
  }

  async getAllPromos(): Promise<Promo[]> {
    const promos = await this.promoModel.find().populate('restaurants');
    return promos;
  }
}
