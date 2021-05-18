import { Todo } from './todo'

export type TodoExcerpt = Pick<Todo, 'id' | 'title'>
