import { GetAllTodosQry } from './get-all-todos-qry'
import { instance, mock, when } from 'ts-mockito'
import { TodoRepository } from '../domain/todo-repository'

describe('GetAllTodosQry', () => {
  it('should get all todos', async () => {
    const { getAllTodosQry, todoRepository } = setup()
    when(todoRepository.findAll()).thenResolve([
      {
        id: 1,
        title: 'foo',
        completed: true,
      },
    ])

    const todos = await getAllTodosQry.internalExecute()

    expect(todos).toEqual([
      {
        id: 1,
        title: 'foo',
        completed: true,
      },
    ])
  })
})

function setup() {
  const todoRepository = mock<TodoRepository>()
  return {
    todoRepository,
    getAllTodosQry: new GetAllTodosQry(instance(todoRepository)),
  }
}
