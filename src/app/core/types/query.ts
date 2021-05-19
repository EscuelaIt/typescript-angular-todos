import { UseCase } from '../use-case'

export abstract class Query<Result, Param = void> extends UseCase<Result, Param> {
  readonly = true
}
