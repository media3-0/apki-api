// @flow

import Post from './type';

import { allPosts } from '../resolvers';

const text = `
  # Collection of *posts*. 
  # [Click me!](https://google.com)
  allPosts(
    # Size of returned *posts* collection
    limit: Int
  ): [Post]
`;

const resolvers = {
  allPosts,
};

const typeDefs = () => [Post];

export default {
  text,
  resolvers,
  typeDefs,
};
