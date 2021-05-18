import { Id } from '../../../core/id'

export interface TodoDto {
  userId: Id
  id: Id
  title: string
  completed: boolean
}
