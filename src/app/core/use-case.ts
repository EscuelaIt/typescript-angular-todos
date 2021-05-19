import { Runner } from './runner/runner'

export abstract class UseCase<Result, Param> {
  abstract readonly: boolean
  abstract internalExecute(param: Param): Promise<Result>

  execute(param: Param): Promise<Result> {
    return Runner.run(this, param) as Promise<Result>
  }
}
