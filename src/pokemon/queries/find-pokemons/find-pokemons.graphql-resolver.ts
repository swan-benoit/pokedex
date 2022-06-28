import { Args, Query, Resolver } from '@nestjs/graphql';
import { PokemonDao } from '@src/pokemon/dao/pokemon.dao';
import { PokemonResponse } from '@src/pokemon/dtos/pokemon.response.dto';
import { FindPokemonsRequest } from '@src/pokemon/queries/find-pokemons/find-pokemons.request';
import { FindPokemonsRequestMapper } from '@src/pokemon/queries/find-pokemons/find-pokemons-request-mapper';
import { Set } from 'immutable';

@Resolver()
export class FindPokemonsGraphqlResolver {
  constructor(private readonly pokemonDao: PokemonDao) {}

  @Query(() => [PokemonResponse])
  async findPokemons(
    @Args('input') input: FindPokemonsRequest,
  ): Promise<Set<PokemonResponse>> {
    const query = FindPokemonsRequestMapper.toDomain(input);

    return this.pokemonDao
      .findManyPaginated(query)
      .then((pokemons) =>
        pokemons.map((pokemon) => new PokemonResponse(pokemon)),
      );
  }
}
