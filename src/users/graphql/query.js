// @flow

import User from './type';
import { allUsers } from '../resolvers';

const text = `
  # Collection of all *users*. 
  allUsers(
    # Size of returned *users* collection
    limit: Int
  ): [User]
`;

const resolvers = {
  allUsers,
};

const typeDefs = () => [User];

export default {
  text,
  resolvers,
  typeDefs,
};
