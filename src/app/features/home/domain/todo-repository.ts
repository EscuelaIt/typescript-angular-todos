import { Todo } from './todo'
import { Id } from '../../../core/id'
import { FindableAll } from '../../../core/types/findable-all'

export interface TodoRepository extends FindableAll<Todo> {
  completeTodo(id: Id): Promise<void>
}
