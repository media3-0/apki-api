// @flow

// TODO: figure out how to use this type for posts to avoid repeating
// import Post from '../posts/typedefs';

export type User = {
  id: String,
  nickname: string,
  email: string,
  uid: string,
  password: string,
  roles: [string],
  posts: [{
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
  }],
};
