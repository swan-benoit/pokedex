import { ApiProperty } from '@nestjs/swagger';
import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { FindPokemons } from '@src/interface-adapters/interfaces/pokemon/find-pokemons';

@ArgsType()
@InputType()
export class FindPokemonsRequest implements FindPokemons {
  @ApiProperty({
    example: 90,
    description: 'Size of the request collection',
  })
  @Field()
  readonly size: number;

  @ApiProperty({
    example: 3,
    description: 'Number of page requested',
  })
  @Field()
  readonly page: number;
}
