import { ID } from '@libs/ddd/domain/value-objects/id.value-object';
import { ImageUrl } from '../value-objects/image-url.value-object';
import { AggregateRoot } from '@libs/ddd/domain/base-classes/aggregate-root.base';

export interface PokemonProps {
  name: string;
  image_url: ImageUrl;
}

export class PokemonEntity extends AggregateRoot<PokemonProps> {
  protected _id: ID;

  validate(): void {
  }

}
