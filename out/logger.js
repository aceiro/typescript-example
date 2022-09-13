"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = require("winston");
const { combine, timestamp, label, printf } = winston_1.format;
const appFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});
exports.logger = (0, winston_1.createLogger)({
    format: combine(label({ label: 'App' }), timestamp(), appFormat),
    transports: [new winston_1.transports.Console()]
});
