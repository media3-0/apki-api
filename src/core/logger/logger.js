// @flow

import winston from 'winston';

/** Types */
import { Config } from './config';


function init(cfg: Config) {
  winston.level = cfg.level;
  if (cfg.logToFile) {
    const TRANSPORT_FILE_OPTIONS = {
      filename: cfg.logPath,
      handleExceptions: true,
      humanReadableUnhandledException: true,
    };
    winston.add(winston.transports.File, TRANSPORT_FILE_OPTIONS);
  }
}

export default init;
