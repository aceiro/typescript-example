import {createLogger, format, transports } from "winston";


const { combine, timestamp, label, printf } = format;

const appFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
  });

export const logger = createLogger({
    format: combine(
        label({ label: 'App' }),
        timestamp(),
        appFormat
      ),
      transports: [new transports.Console()]
  });