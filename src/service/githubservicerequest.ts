import { ServiceAPI } from "./serviceapi";
import request from "request";
import { logger } from "../logger";
import { Repos } from "../model/repos";
import { User } from "../model/user";

export class GithubServiceRequest implements ServiceAPI{
    getReposSorted(userName: string): Promise<Repos[]> {
        throw new Error("Method not implemented.");
    }
    populateUserRepos(userName: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    getRepos(userName: string): Promise<Repos[]> {
        throw new Error("Method not implemented.");
    }

    
    getUser(userName: string, callback?: (error: any, response: any, body: any) => any): any {
       const uri = `https://api.github.com/users/${userName}`
       const options = {
            headers:{
                "user-agent":"chrome"
            }
       }
       logger.info('GithubServiceAPI::getUser::entry')
       request.get(uri,options, callback)
       logger.info('GithubServiceAPI::getUser::exit')
    }
    
}