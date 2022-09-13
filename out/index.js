"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
const githubserviceaxios_1 = require("./service/githubserviceaxios");
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
(() => __awaiter(void 0, void 0, void 0, function* () {
    const argv = process.argv || "aceiro";
    logger_1.logger.info('App::entry');
    const service = new githubserviceaxios_1.GithubServiceAxios();
    const user = yield service.getUser("aceiro");
    logger_1.logger.info(JSON.stringify(user));
    const infos = yield service.populateUserRepos("aceiro", true);
    logger_1.logger.info(JSON.stringify(infos));
    logger_1.logger.info('App::exit');
}))();
