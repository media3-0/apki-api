// @flow

import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import cors from 'kcors';

import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa';
import schema from './schema';

import * as mongodb from './services/mongodb';

import * as envconfig from './core/envconfig/envconfig';

const configStructure = {
  app: { port: 9778 },
  mongodb: new mongodb.Config(),
};
const app = new Koa();
const router = new Router();

async function run() {
  try {
    const cfg = envconfig.initWithOptions(configStructure, { prefix: 'APKI' });

    await mongodb.connect(cfg.mongodb);

    const options = {
      graphql: {
        schema,
      },
      graphiql: {
        endpointURL: '/graphql',
        query: (
                    `query allPosts($limit: Int) {
          allPosts(limit: $limit) {
            id
            author
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

    app.listen(cfg.app.port, () => console.log(`Server started on localhost:${cfg.app.port}`));
  } catch (err) {
    console.log('while running app: ', err);
    process.exit(1);
  }
}

run();
