import { TodoHttpRepository } from './todo-http-repository'
import { instance, mock, when } from 'ts-mockito'
import { HttpClient } from '@angular/common/http'
import { of } from 'rxjs'
import { TodoMother } from '../../../../../tests/todo-mother'

describe('TodoHttpRepository', () => {
  it('should find all todos', async () => {
    const { httpClient, todoHttpRepository } = setup()
    when(httpClient.get('https://jsonplaceholder.typicode.com/todos')).thenReturn(of([TodoMother.completedTodoDto()]))

    const todos = await todoHttpRepository.findAll()

    expect(todos).toEqual([TodoMother.completedTodo()])
  })
})

function setup() {
  const httpClient = mock(HttpClient)

  return {
    httpClient,
    todoHttpRepository: new TodoHttpRepository(instance(httpClient)),
  }
}
