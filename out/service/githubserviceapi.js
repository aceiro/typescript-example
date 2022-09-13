"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubServiceAPI = void 0;
const request_1 = __importDefault(require("request"));
const logger_1 = require("../logger");
class GithubServiceAPI {
    getUser(userName, callback) {
        const uri = `https://api.github.com/users/${userName}`;
        const options = {
            headers: {
                "user-agent": "chrome"
            }
        };
        logger_1.logger.info('GithubServiceAPI::entry');
        request_1.default.get(uri, options, callback);
        logger_1.logger.info('GithubServiceAPI::exit');
    }
}
exports.GithubServiceAPI = GithubServiceAPI;
