import { FindManyPaginatedParams } from '@libs/ddd/domain/ports/repository.ports';
import { PokemonProps } from '@src/pokemon/domain/entities/pokemon.entity';
import { FindPokemonsRequest } from '@src/pokemon/queries/find-pokemons/find-pokemons.request';

export class FindPokemonsRequestMapper {
  static toDomain(
    params: FindPokemonsRequest,
  ): FindManyPaginatedParams<PokemonProps> {
    const start = params.size * (params.page - 1);

    return {
      pagination: {
        limit: params.size,
        skip: start + params.size,
      },
    };
  }
}
