import { makeExecutableSchema } from 'graphql-tools';

import * as Posts from './posts/graphql';
import { resolvers as PostTypeResolvers } from './posts/graphql/type';
import { resolvers as UserTypeResolvers } from './users/graphql/type';
import * as Users from './users/graphql';

const Query = `
  type Query {
    ${Posts.query.text}
    ${Users.query.text}
  }
`;

const Schema = `
  schema {
    query: Query
  }
`;

const typeDefs = [
  Schema,
  Query,
  Posts.query.typeDefs,
  Users.query.typeDefs,
];

const resolvers = {
  Query: {
    ...Posts.query.resolvers,
    ...Users.query.resolvers,
  },
  Post: {
    ...PostTypeResolvers,
  },
  User: {
    ...UserTypeResolvers,
  },
};

export default makeExecutableSchema({ typeDefs, resolvers });
