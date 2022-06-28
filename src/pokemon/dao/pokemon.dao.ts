import { PokemonDaoPort } from '@src/pokemon/domain/port/pokemon.dao.port';
import { FindManyPaginatedParams, PaginationMeta, } from '@libs/ddd/domain/ports/repository.ports';
import { Set } from 'immutable';
import { PokemonEntity, PokemonProps, } from '@src/pokemon/domain/entities/pokemon.entity';
import { Injectable } from '@nestjs/common';
import { catchError, filter, map, Observable, of } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { Option } from 'oxide.ts';
import { PokemonDaoMapper } from '@src/pokemon/dao/pokemon.dao-mapper';

@Injectable()
export class PokemonDao implements PokemonDaoPort {
  constructor(private readonly httpService: HttpService) {}

  findManyPaginated(
    options: FindManyPaginatedParams<PokemonProps>,
  ): Observable<Set<PokemonEntity>> {
    const url = `https://pokeapi.co/api/v2/pokemon/?${PokemonDao.queryParams(
      options.pagination,
    )}`;

    return this.httpService.get(url).pipe(
      map((response) => response?.data?.results),
      filter(Boolean),
      map((result) => Set(result)),
      map((jsonSet) => jsonSet.map(PokemonDaoMapper.toDomain)),
      catchError((err) => {
        console.log(err, 'catch');
        return of(err);
      }),
    );
  }

  private static queryParams(options: PaginationMeta): string {
    const page = Option.from(options.page)
      .map((page) => `page=${page}`)
      .unwrapOr('');

    const limit = Option.from(options.limit)
      .map((limit) => `&limit=${limit}`)
      .unwrapOr('');

    const skip = Option.from(options.skip)
      .map((skip) => `&offset=${skip}`)
      .unwrapOr('');

    return page + limit + skip;
  }
}
