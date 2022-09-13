"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repos = void 0;
class Repos {
    constructor(name, fullName, size) {
        this.name = name;
        this.fullName = fullName;
        this.size = size;
    }
    get repoSize() {
        return this.size;
    }
}
exports.Repos = Repos;
