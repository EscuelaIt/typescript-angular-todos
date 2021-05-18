export interface FindableAll<Entity> {
  findAll(): Promise<Entity[]>
}
