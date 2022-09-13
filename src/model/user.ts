import { Repos } from "./repos";
export class User {
  constructor(
    private _id: number,
    private _login: string,
    private _name: string,
    private _followes?: number,
    private _following?: number,
    private _repos?: Repos[]
  ) {}
  get toJSONString(): string {
    return JSON.stringify(this, ["_id", "_login", "_name", "_repos"])
  }

  set id(id: number) {
    this._id = id
  }

  set login(login: string){
    this._login = login
  }

  set repos(repos: Repos[]){
    this._repos = repos
  }
 
}
