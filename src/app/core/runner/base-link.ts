import { Link } from './link'
import { EmptyLink } from './empty-link'
import { Context } from "./context"

export abstract class BaseLink {
  nextLink: Link = new EmptyLink()

  abstract next(context: Context): void

  setNext(link: Link): Link {
    this.nextLink = link
    return this
  }
}
