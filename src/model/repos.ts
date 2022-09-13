export class Repos {
  constructor(
    private name: string,
    private fullName: string,
    private size: number
  ) {}
  get repoSize(): number{
    return this.size
  }
}
