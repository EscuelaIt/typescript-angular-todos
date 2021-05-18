export interface Findable<Entity> {
  find(): Promise<Entity>
}
