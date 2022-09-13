import { ServiceAPI } from "./service/serviceapi";
import { GithubServiceRequest } from "./service/githubservicerequest";
import { logger } from "./logger";
import { GithubServiceAxios } from "./service/githubserviceaxios";
import { User } from "./model/user";

// v1
// (()=>{
   
//     logger.info('App::entry')
//     const service: ServiceAPI = new GithubServiceRequest()
//     service.getUser('aceiro', (error: any, response: any, body: any)=>{
//         logger.info(body)
//     })
//     logger.info('App::entry')

// })();

// v2
(async ()=>{
    const argv = process.argv || "aceiro"

    logger.info('App::entry')
    const service: ServiceAPI = new GithubServiceAxios()
    const user: User = await service.getUser("aceiro")
    logger.info(JSON.stringify(user))

    const infos = await service.populateUserRepos("aceiro", true)
    logger.info(JSON.stringify(infos))

    logger.info('App::exit')
    
})()