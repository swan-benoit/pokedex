import { FindManyPaginatedParams } from '@libs/ddd/domain/ports/repository.ports';
import { PokemonProps } from '@src/pokemon/domain/entities/pokemon.entity';
import { FindPokemonsRequest } from '@src/pokemon/queries/find-pokemons/find-pokemons.request';

export class FindPokemonsRequestMapper {
  static toDomain(
    params: FindPokemonsRequest,
  ): FindManyPaginatedParams<PokemonProps> {
    return {
      pagination: {
        skip: params.skip,
        page: params.page,
        limit: params.limit,
      },
    };
  }
}
