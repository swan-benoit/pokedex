import { PokemonDaoPort } from '@src/pokemon/domain/port/pokemon.dao.port';
import { FindManyPaginatedParams } from '@libs/ddd/domain/ports/repository.ports';
import { Set } from 'immutable';
import { PokemonEntity, PokemonProps, } from '@src/pokemon/domain/entities/pokemon.entity';
import { DateVO } from '@libs/ddd/domain/value-objects/date.value-object';
import { ImageUrl } from '@src/pokemon/domain/value-objects/image-url.value-object';
import { UUID } from '@libs/ddd/domain/value-objects/uuid.value-object';
import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class PokemonDao implements PokemonDaoPort {
  findManyPaginated(
    options: FindManyPaginatedParams<PokemonProps>,
  ): Observable<Set<PokemonEntity>> {
    // TODO Implement using poke api sdk
    return of(
      Set.of(
        new PokemonEntity({
          id: UUID.generate(),
          createdAt: DateVO.now(),
          updatedAt: DateVO.now(),
          props: {
            name: 'pikachu',
            image_url: new ImageUrl(
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
            ),
          },
        }),
        new PokemonEntity({
          id: UUID.generate(),
          createdAt: DateVO.now(),
          updatedAt: DateVO.now(),
          props: {
            name: 'raichu',
            image_url: new ImageUrl(
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
            ),
          },
        }),
      ),
    );
  }
}
