import { AggregateRoot } from '@libs/ddd/domain/base-classes/aggregate-root.base';
import { Set } from 'immutable';
import { PokemonEntity } from '../entities/pokemon.entity';
import {
  ArgumentInvalidException,
} from '@libs/exceptions';
import { ID } from '@libs/ddd/domain/value-objects/id.value-object';

interface Pagintator {
  from: number;
  size: number;
  pokemons: Set<PokemonEntity>;
}

export class PageAggregate extends AggregateRoot<Pagintator> {
  protected _id: ID;

  validate(): void {
    if (this.props.from <= 0) {
      throw new ArgumentInvalidException('from should be superior to 0');
    }

    if (this.props.size <= 0) {
      throw new ArgumentInvalidException('size should be superior to 0');
    }
  }
}
