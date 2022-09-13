import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Promo, promoDocument } from './schema/promo.schema';
import { Injectable } from '@nestjs/common/decorators';
import { CreatePromoDto } from './dto/create-promo.dto';

@Injectable()
export class PromoService {
  constructor(
    @InjectModel(Promo.name)
    private promoModel: Model<promoDocument>,
  ) {}

  async getOnePromo(id: string): Promise<Promo> {
    return await this.promoModel.findById(id);
  }

  async create(createPromoDto: CreatePromoDto): Promise<Promo> {
    const promo = await this.promoModel.create(createPromoDto);
    return promo;
  }

  async getAllPromos(): Promise<Promo[]> {
    const promos = await this.promoModel.find().populate('restaurants');
    return promos;
  }
}
