import { ResponseBase } from '@libs/ddd/interface-adapters/base-classes/response.base';
import { ApiProperty } from '@nestjs/swagger';
import { Field, ObjectType } from '@nestjs/graphql';
import { PokemonEntity } from '@src/pokemon/domain/entities/pokemon.entity';
import { Pokemon } from '@src/interface-adapters/interfaces/pokemon/pokemon';

@ObjectType()
export class PokemonResponse extends ResponseBase implements Pokemon {
  constructor(pokemonEntity: PokemonEntity) {
    super(pokemonEntity);
    const props = pokemonEntity.getPropsCopy();

    this.name = props.name;
    this.image_url = props.image_url.value;
  }

  @ApiProperty({
    example: 'Pikachu',
    description: "Pokemon 's name",
  })
  @Field()
  name: string;

  @ApiProperty({
    example: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    description: "Pokemon's image",
  })
  @Field()
  image_url: string;
}
