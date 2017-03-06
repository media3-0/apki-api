// @flow
import type { User } from '../../users/typedefs';
import type { Post } from '../typedefs';
import UserModel from '../../users/domain/model';

async function author(post: Post): Promise<User> {
  const result = await UserModel.findOne({ _id: post.author });
  return result;
}

export default author;
