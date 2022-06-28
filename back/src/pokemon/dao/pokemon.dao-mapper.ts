import { UUID } from '@libs/ddd/domain/value-objects/uuid.value-object';
import { PokemonEntity, PokemonProps, } from '@src/pokemon/domain/entities/pokemon.entity';
import { ImageUrl } from '@src/pokemon/domain/value-objects/image-url.value-object';

export class PokemonDaoMapper {
  static toDomain(pokemonJson: any): PokemonEntity {
    const id = UUID.generate();
    const props: PokemonProps = {
      image_url: new ImageUrl(pokemonJson?.url),
      name: pokemonJson?.name,
    };

    return new PokemonEntity({ id, props });
  }
}
