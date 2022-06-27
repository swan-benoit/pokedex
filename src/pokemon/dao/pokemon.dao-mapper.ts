import { UUID } from '@libs/ddd/domain/value-objects/uuid.value-object';
import { PokemonEntity, PokemonProps, } from '@src/pokemon/domain/entities/pokemon.entity';
import { ImageUrl } from '@src/pokemon/domain/value-objects/image-url.value-object';

export class PokemonDaoMapper {
  // Temp type, see sdk returned type
  protected toDomainProps(pokemonJson: object): PokemonEntity {
    const id = new UUID('12');
    const props: PokemonProps = {
      image_url: new ImageUrl('www.google.fr'),
      name: 'Pikachu',
    };

    return new PokemonEntity({ id, props });
  }
}
