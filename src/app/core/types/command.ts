import { UseCase } from '../use-case'

export abstract class Command<Param> extends UseCase<void, Param> {
  readonly = false
}
