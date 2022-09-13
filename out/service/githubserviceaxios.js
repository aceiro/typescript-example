"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubServiceAxios = void 0;
const logger_1 = require("../logger");
const user_1 = require("../model/user");
const axios_1 = __importDefault(require("axios"));
const repos_1 = require("../model/repos");
const _ = __importStar(require("lodash"));
class GithubServiceAxios {
    getReposSorted(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                logger_1.logger.info('GithubServiceAPI::sortReposBySize::entry');
                const repos = yield this.getRepos(userName);
                const sorted = _.sortBy(repos, [(r) => { return r.repoSize; }]);
                return sorted;
            }
            catch (e) {
                logger_1.logger.error(`Error :: ${e}`);
                throw new Error(`Woops someting goes wrong!`);
            }
            finally {
                logger_1.logger.info('GithubServiceAPI::sortReposBySize::exit');
            }
        });
    }
    populateUserRepos(userName, sorted) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                logger_1.logger.info('GithubServiceAPI::populateUserRepos::entry');
                const user = yield this.getUser(userName);
                let repos = [];
                if (sorted) {
                    repos = yield this.getReposSorted(userName);
                }
                else {
                    repos = yield this.getRepos(userName);
                }
                user.repos = repos;
                return user;
            }
            catch (e) {
                logger_1.logger.error(`Error :: ${e}`);
                throw new Error(`Woops someting goes wrong!`);
            }
            finally {
                logger_1.logger.info('GithubServiceAPI::populateUserRepos::exit');
            }
        });
    }
    getRepos(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const uri = `https://api.github.com/users/${userName}/repos`;
                logger_1.logger.info('GithubServiceAPI::getRepos::entry');
                const { data } = yield axios_1.default.get(uri);
                let repos = [];
                for (const value of data) {
                    const repo = new repos_1.Repos(value.name, value.full_name, value.size);
                    repos.push(repo);
                }
                return repos;
            }
            catch (e) {
                logger_1.logger.error(`Error :: ${e}`);
                throw new Error(`Woops someting goes wrong!`);
            }
            finally {
                logger_1.logger.info('GithubServiceAPI::getRepos::exit');
            }
        });
    }
    getUser(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const uri = `https://api.github.com/users/${userName}`;
                logger_1.logger.info('GithubServiceAPI::getUser::entry');
                const { data } = yield axios_1.default.get(uri);
                return new user_1.User(data.id, data.login, data.name);
            }
            catch (e) {
                logger_1.logger.error(`Error :: ${e}`);
                throw new Error(`Woops someting goes wrong!`);
            }
            finally {
                logger_1.logger.info('GithubServiceAPI::getUser::exit');
            }
        });
    }
}
exports.GithubServiceAxios = GithubServiceAxios;
