import { Args, Query, Resolver } from '@nestjs/graphql';
import { PokemonDao } from '@src/pokemon/dao/pokemon.dao';
import { PokemonResponse } from '@src/pokemon/dtos/pokemon.response.dto';
import { FindPokemonsRequest } from '@src/pokemon/queries/find-pokemons/find-pokemons.request';
import { FindPokemonsRequestMapper } from '@src/pokemon/queries/find-pokemons/find-pokemons-request-mapper';
import { Set } from 'immutable';
import { map, Observable } from 'rxjs';

@Resolver()
export class FindPokemonsGraphqlResolver {
  constructor(private readonly pokemonDao: PokemonDao) {}

  @Query(() => [PokemonResponse])
  findPokemons(
    @Args('input') input: FindPokemonsRequest,
  ): Observable<Set<PokemonResponse>> {
    const query = FindPokemonsRequestMapper.toDomain(input);
    const pokemonToResponse = (pokemons) => pokemons.map((pokemon) => new PokemonResponse(pokemon));

    return this.pokemonDao
      .findManyPaginated(query)
      .pipe(map(pokemonToResponse));
  }
}
