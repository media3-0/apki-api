import { type as User } from '../../users/graphql/type';
import { author } from '../resolvers';

const Post = `
  type Post {
    id: String!
    title: String!
    author: User!
    content: String!
  }
`;

const resolvers = {
  author,
};

const type = () => [Post, User];

export {
  type,
  resolvers,
};
