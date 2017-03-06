// @flow

import log from 'winston';
import mongoose from 'mongoose';
import { Config } from './config';

// Use native promises
mongoose.Promise = global.Promise;

function handleConnectionError(err) {
  log.error('database error: ', err);
  process.exit(1);
}

function connect(cfg: Config) {
  return new Promise((resolve, reject) => {
    mongoose.connect(`mongodb://${cfg.host}:${cfg.port}/${cfg.dbName}`, {
      user: cfg.user,
      password: cfg.password,
      server: { poolSize: cfg.poolSize },
    }).then(() => {
      mongoose.connection.on('error', handleConnectionError);
      resolve();
    }).catch(reject);
  });
}

export default connect;
