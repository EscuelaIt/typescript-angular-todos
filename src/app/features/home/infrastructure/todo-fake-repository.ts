import { TodoRepository } from '../domain/todo-repository'
import { Todo } from '../domain/todo'
import { Injectable } from '@angular/core'
import { Id } from '../../../core/id'
import { TodoMother } from '../../../../../tests/todo-mother'

@Injectable({
  providedIn: 'root',
})
export class TodoFakeRepository implements TodoRepository {
  async findAll(): Promise<Todo[]> {
    return [TodoMother.completedTodo()]
  }

  async completeTodo(_id: Id): Promise<void> {}
}
