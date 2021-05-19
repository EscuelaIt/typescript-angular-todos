import { Id } from '../../../core/id'
import { Inject, Injectable } from '@angular/core'
import { TODO_REPOSITORY_TYPE } from '../../../core/types'
import { TodoRepository } from '../domain/todo-repository'
import { Command } from '../../../core/types/command'

@Injectable({
  providedIn: 'root',
})
export class CompleteTodoCmd extends Command<Id> {
  constructor(@Inject(TODO_REPOSITORY_TYPE) private readonly todoRepository: TodoRepository) {
    super()
  }

  async internalExecute(id: Id): Promise<void> {
    this.todoRepository.completeTodo(id)
  }
}
