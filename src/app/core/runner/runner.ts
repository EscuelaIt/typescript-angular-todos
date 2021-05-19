import { UseCase } from '../use-case'
import { LoggerLink } from './logger-link'
import { Injectable } from '@angular/core'
import { ExecutorLink } from './executor-link'
import { Context } from './context'

@Injectable({
  providedIn: 'root',
})
export class Runner {
  private static loggerLink = new LoggerLink()
  private static executorLink = new ExecutorLink()
  static chain = Runner.executorLink.setNext(Runner.loggerLink)

  static async run(useCase: UseCase<unknown, unknown>, param: unknown): Promise<unknown> {
    const context: Context = { useCase, param }
    this.chain.next(context)
    return context.result
  }
}
