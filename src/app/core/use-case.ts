export interface UseCase<Result, Param> {
  execute(param: Param): Promise<Result>
}
