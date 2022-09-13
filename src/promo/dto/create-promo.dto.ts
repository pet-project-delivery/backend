import { Restaurant } from 'src/restaurant/schemas/restaurant.schema';

export class CreatePromoDto {
  readonly url: string;
  readonly promocode: '';
  readonly name: string;
  readonly restaurant: Restaurant[];
}
