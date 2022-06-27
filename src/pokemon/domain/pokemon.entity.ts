import { AggregateRoot } from '../../libs/ddd/domain/base-classes/aggregate-root.base';
import { ID } from '../../libs/ddd/domain/value-objects/id.value-object';

export interface PokemonProps {
    name: string
}

export class PokemonEntity extends AggregateRoot<PokemonProps>{
    protected _id: ID;

    validate(): void {
    }

}
