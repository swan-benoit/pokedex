import { DaoPort } from '@libs/ddd/domain/ports/dao.port';
import { PokemonEntity, PokemonProps, } from '@src/pokemon/domain/entities/pokemon.entity';
import { FindManyPaginatedParams } from '@libs/ddd/domain/ports/repository.ports';
import { Set } from 'immutable';

export interface PokemonDaoPort extends DaoPort<PokemonEntity, PokemonProps> {
  findManyPaginated(
    options: FindManyPaginatedParams<PokemonProps>,
  ): Promise<Set<PokemonEntity>>;
}
