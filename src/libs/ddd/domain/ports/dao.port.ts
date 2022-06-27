import { FindManyPaginatedParams } from '@libs/ddd/domain/ports/repository.ports';
import { Set } from 'immutable';

export interface DaoPort<Entity, EntityProps> {
  findManyPaginated(
    options: FindManyPaginatedParams<EntityProps>,
  ): Promise<Set<Entity>>;
}
