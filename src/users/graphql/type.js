import { type as Post } from '../../posts/graphql/type';
import { posts } from '../resolvers';

const User = `
  type User {
    id: String!
    nickname: String!
    email: String!
    uid: String
    password: String
    roles: [String]!
    posts: [Post]!
  }
`;

const resolvers = {
  posts,
};

const type = () => [User, Post];

export {
  type,
  resolvers,
};
