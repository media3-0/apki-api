## apki.org GraphQL API

## Installation

#### Clone repository

```bash
git clone https://github.com/media3-0/apki-api.git
cd apki-git
```

#### Install dependencies

```bash
yarn
``` 
or
```bash
npm install
``` 

## Usage

#### Run unit tests
```bash
npm test
```

#### Run unit tests coverage
```bash
npm test-cover
```
>After executing this command the base table with test coverage will be printed in console, but
>HTML report version which shows coverage for each tested file can be find in ./coverage/lcov-report/index.html 

#### Start server
```bash
npm start
```

#### Start server with Flow + hot-reloading
```bash
npm run dev
```

#### API endpoint: [localhost:9778/graphql](http://localhost:9778/graphql)
#### API Console GraphiQL: [localhost:9778/graphiql](http://localhost:9778/graphiql)

## Development

To initialize the database with sample data run (of course MongoDB must be running):
```bash
mongo [database] < scripts/mongo.js
```
where `[database]` is the name of database, eg.
```bash
mongo apki < scripts/mongo.js
```
**ACHTUNG! ACHTUNG!** Existing data will be lost

## Configuration via environment variables
Name  | Default Value | Description
------|---------------|-------------
`APKI_APP_PORT` | 9778 | Port under which application will be available.
`APKI_MONGODB_DB_NAME` | 'apki' | Mongo database name which will be used to persist all data manipulated by apki-org micro-service.
`APKI_MONGODB_HOST` | 127.0.0.1 | Mongo server host
`APKI_MONGODB_PORT` | 27017 | Mongo server port
`APKI_MONGODB_USER` | '' | Mongo username for authentication, if not specified than no authentication will be used.
`APKI_MONGODB_PASSWORD` | '' | Mongo password for authentication, if not specified than no authentication will be used.
`APKI_MONGODB_POOL_SIZE` | 5 | Number of connections in the connection pool for each server instance
