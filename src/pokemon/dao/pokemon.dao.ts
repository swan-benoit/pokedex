import { PokemonDaoPort } from '@src/pokemon/domain/port/pokemon.dao.port';
import { FindManyPaginatedParams } from '@libs/ddd/domain/ports/repository.ports';
import { Set } from 'immutable';
import { PokemonEntity, PokemonProps, } from '@src/pokemon/domain/entities/pokemon.entity';

export class PokemonDao implements PokemonDaoPort {
  findManyPaginated(
    options: FindManyPaginatedParams<PokemonProps>,
  ): Promise<Set<PokemonEntity>> {
    // TODO Implement using poke api sdk
    return Promise.resolve(Set.of());
  }
}
