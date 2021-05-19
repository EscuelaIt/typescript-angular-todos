import { GetAllTodosQry } from './get-all-todos-qry'
import { instance, mock, when } from 'ts-mockito'
import { TodoRepository } from '../domain/todo-repository'
import { TodoMother } from '../../../../../tests/todo-mother'

describe('GetAllTodosQry', () => {
  it('should get all todos', async () => {
    const { getAllTodosQry, todoRepository } = setup()
    when(todoRepository.findAll()).thenResolve([TodoMother.completedTodo()])

    const todos = await getAllTodosQry.internalExecute()

    expect(todos).toEqual([TodoMother.completedTodo()])
  })
})

function setup() {
  const todoRepository = mock<TodoRepository>()
  return {
    todoRepository,
    getAllTodosQry: new GetAllTodosQry(instance(todoRepository)),
  }
}
