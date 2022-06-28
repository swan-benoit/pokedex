import { FindManyPaginatedParams } from '@libs/ddd/domain/ports/repository.ports';
import { Set } from 'immutable';
import { Observable } from 'rxjs';

export interface DaoPort<Entity, EntityProps> {
  findManyPaginated(
    options: FindManyPaginatedParams<EntityProps>,
  ): Observable<Set<Entity>>;
}
