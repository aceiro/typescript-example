"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(_id, _login, _name, _followes, _following, _repos) {
        this._id = _id;
        this._login = _login;
        this._name = _name;
        this._followes = _followes;
        this._following = _following;
        this._repos = _repos;
    }
    get toJSONString() {
        return JSON.stringify(this, ["_id", "_login", "_name", "_repos"]);
    }
    set id(id) {
        this._id = id;
    }
    set login(login) {
        this._login = login;
    }
    set repos(repos) {
        this._repos = repos;
    }
}
exports.User = User;
