import { Todo } from '../src/app/features/home/domain/todo'
import { TodoDto } from '../src/app/features/home/infrastructure/todo-dto'

export class TodoMother {
  static completedTodo(): Todo {
    return {
      id: 1,
      completed: true,
      title: 'Buy milk',
    }
  }

  static completedTodoDto(): TodoDto {
    return { id: 1, completed: true, title: 'Buy milk', userId: 1 }
  }
}
