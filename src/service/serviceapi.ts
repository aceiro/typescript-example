import { RequestCallback } from "request";
import { User } from "../model/user";
import { Repos } from "../model/repos";


export interface ServiceAPI{
    getUser<T extends RequestCallback>(userName: string, callback?: T):Promise<User>
    getRepos(userName: string): Promise<Repos[]>
    populateUserRepos(userName: string, sorted?: boolean):Promise<User>
    getReposSorted(userName: string): Promise<Repos[]>
}