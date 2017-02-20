// @flow

import winston from 'winston';

/** Types */
import { Config } from './config';


function init(cfg: Config) {

  // Maximum logs level to logging,
  winston.level = cfg.level;

  if (cfg.logToFile) {
    const TRANSPORT_FILE_OPTIONS = {
      filename: cfg.logPath,
      handleExceptions: true,
      humanReadableUnhandledException: true,
    };
    process.env.LOG_FILE && winston.add(winston.transports.File, TRANSPORT_FILE_OPTIONS);
  }

}

export default init;
