import { ModelBase } from '@libs/ddd/interface-adapters/interfaces/model.base.interface';

export interface Pokemon extends ModelBase {
  name: string;
  image_url: string;
}
