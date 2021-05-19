import { Link } from './link'

export class EmptyLink implements Link {
  setNext(link: Link): Link {
    return this
  }

  next() {}
}
