// @flow

import log from 'winston';
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import cors from 'kcors';

import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa';
import schema from './schema';

import * as logger from './core/logger';
import * as mongodb from './core/mongodb';

import envconfig from './core/envconfig';

const configStructure = {
  app: { port: 9778 },
  logger: logger.config,
  mongodb: mongodb.config,
};
const app = new Koa();
const router = new Router();

(async function run() {
  const cfg = envconfig.init(configStructure, { prefix: 'APKI' });
  logger.init(cfg.logger);

  try {
    await mongodb.connect(cfg.mongodb);
  } catch (err) {
    log.error('while connecting to database: ', err);
    process.exit(1);
  }

  const options = {
    graphql: {
      schema,
    },
    graphiql: {
      endpointURL: '/graphql',
      query: (`
  query testing($limit: Int) {
    allPosts(limit: $limit) {
      id
      author {
        id
        nickname
     }
    }
    allUsers(limit: $limit) {
      id
      posts {
        id
        title
     }
    }
  }`
      ),
      variables: {
        limit: 2,
      },
    },
  };

  router
    .post('/graphql', graphqlKoa(options.graphql))
    .get('/graphql', graphqlKoa(options.graphql))
    .get('/graphiql', graphiqlKoa(options.graphiql));

  app
    .use(cors())
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods());

  app.listen(cfg.app.port, () => log.info(`Server started on localhost:${cfg.app.port}`));
}());
