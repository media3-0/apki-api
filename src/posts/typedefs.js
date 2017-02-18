// @flow

// TODO: figure out how to use this type for author to avoid repating
//import type User from '../users/typedefs';

export type Post = {
  id: string,
  title: string,
  author: {
    nickname: string,
    email: string,
    uid: string,
    password: string,
    roles: [string],
  },
  content: string,
};
