import { Module } from '@nestjs/common';
import { FindPokemonsGraphqlResolver } from 'src/pokemon/queries/find-pokemons/find-pokemons.graphql-resolver';
import { PokemonDao } from '@src/pokemon/dao/pokemon.dao';

@Module({
  providers: [FindPokemonsGraphqlResolver, PokemonDao],
})
export class PokemonModule {}
