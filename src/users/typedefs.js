// @flow

import type { Post } from '../posts/typedefs';

export type User = {
  id: String,
  nickname: string,
  email: string,
  uid: string,
  password: string,
  roles: [string],
  posts: [Post],
};
