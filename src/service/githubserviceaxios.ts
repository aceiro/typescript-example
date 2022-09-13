import { ServiceAPI } from "./serviceapi";
import request from "request";
import { logger } from "../logger";
import { User } from "../model/user";
import axios from "axios";
import { Repos } from "../model/repos";
import * as _ from 'lodash'


export class GithubServiceAxios implements ServiceAPI{
    async getReposSorted(userName: string): Promise<Repos[]> {
        try{
            logger.info('GithubServiceAPI::sortReposBySize::entry')
            const repos = await this.getRepos(userName)
            const sorted = _.sortBy(repos, [(r)=>{return r.repoSize}])
            return sorted

        }catch(e){
            logger.error(`Error :: ${e}`)
            throw new Error(`Woops someting goes wrong!`)
        }finally{
            logger.info('GithubServiceAPI::sortReposBySize::exit')
        }
    }
    async populateUserRepos(userName: string, sorted?: boolean): Promise<User> {
        try{
            logger.info('GithubServiceAPI::populateUserRepos::entry')
            const user  = await this.getUser(userName);
            let repos: Repos[] = []

            if(sorted){
                repos = await this.getReposSorted(userName)
            }else {
                repos = await this.getRepos(userName)
            }
           
            user.repos = repos
            return user
        }catch(e){
            logger.error(`Error :: ${e}`)
            throw new Error(`Woops someting goes wrong!`)
        }finally{
            logger.info('GithubServiceAPI::populateUserRepos::exit')
        }
       
    }
    async getRepos(userName: string): Promise<Repos[]> {
        try{
            const uri = `https://api.github.com/users/${userName}/repos`
            logger.info('GithubServiceAPI::getRepos::entry')
            const {data} = await axios.get(uri)
            let repos: Repos[] = []
            for(const value of data){
                const repo = new Repos(value.name, value.full_name, value.size)
                repos.push(repo)
            }
            return repos
        }catch(e){
            logger.error(`Error :: ${e}`)
            throw new Error(`Woops someting goes wrong!`)
        }finally{
            logger.info('GithubServiceAPI::getRepos::exit')
        }
    }

    async getUser(userName: string): Promise<User> {
        try{
            const uri = `https://api.github.com/users/${userName}`
            logger.info('GithubServiceAPI::getUser::entry')
            const {data} = await axios.get(uri)
            return new User(data.id, data.login, data.name) 
        }catch(e){
            logger.error(`Error :: ${e}`)
            throw new Error(`Woops someting goes wrong!`)
        }finally{
            logger.info('GithubServiceAPI::getUser::exit')
        }
       
    }
}