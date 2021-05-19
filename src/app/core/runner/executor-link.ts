import { BaseLink } from './base-link'
import { Context } from './context'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ExecutorLink extends BaseLink {
  next(context: Context): void {
    context.result = context.useCase.internalExecute(context.param)
    this.nextLink.next(context)
  }
}
