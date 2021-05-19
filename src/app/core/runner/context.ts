import { UseCase } from '../use-case'

export interface Context {
  useCase: UseCase<unknown, unknown>
  result?: Promise<unknown>
  param: unknown
}
