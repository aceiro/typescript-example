"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubServiceRequest = void 0;
const request_1 = __importDefault(require("request"));
const logger_1 = require("../logger");
class GithubServiceRequest {
    getReposSorted(userName) {
        throw new Error("Method not implemented.");
    }
    populateUserRepos(userName) {
        throw new Error("Method not implemented.");
    }
    getRepos(userName) {
        throw new Error("Method not implemented.");
    }
    getUser(userName, callback) {
        const uri = `https://api.github.com/users/${userName}`;
        const options = {
            headers: {
                "user-agent": "chrome"
            }
        };
        logger_1.logger.info('GithubServiceAPI::getUser::entry');
        request_1.default.get(uri, options, callback);
        logger_1.logger.info('GithubServiceAPI::getUser::exit');
    }
}
exports.GithubServiceRequest = GithubServiceRequest;
