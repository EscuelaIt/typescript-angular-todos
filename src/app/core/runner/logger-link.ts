import { BaseLink } from './base-link'
import { Context } from './context'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class LoggerLink extends BaseLink {
  next(context: Context): void {
    console.log(context.useCase.constructor.name)
    console.log(context.param)
    this.nextLink.next(context)
  }
}
