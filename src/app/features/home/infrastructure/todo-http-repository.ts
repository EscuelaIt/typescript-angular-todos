import { TodoRepository } from '../domain/todo-repository'
import { Todo } from '../domain/todo'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { TodoDto } from './todo-dto'
import { Id } from '../../../core/id'

@Injectable({
  providedIn: 'root',
})
export class TodoHttpRepository implements TodoRepository {
  private static URL = 'https://jsonplaceholder.typicode.com/todos'

  constructor(private readonly httpClient: HttpClient) {}

  async findAll(): Promise<Todo[]> {
    const todos = await this.httpClient.get<TodoDto[]>(TodoHttpRepository.URL).toPromise()
    return todos.map(todo => ({
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
    }))
  }

  completeTodo(id: Id): Promise<void> {
    return this.httpClient
      .put<void>(`${TodoHttpRepository.URL}/${id.toString()}`, {
        completed: true,
      })
      .toPromise()
  }
}
