// @flow

import type { User } from '../users/typedefs';

export type Post = {
  id: string,
  title: string,
  author: User,
  content: string,
};
