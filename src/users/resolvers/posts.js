// @flow
import type { User } from '../typedefs';
import type { Post } from '../../posts/typedefs';
import PostModel from '../../posts/domain/model';

async function posts(author: User): Promise<[Post]> {
  const result = await PostModel.find({ _id: { $in: author.posts } });
  return result;
}

export default posts;
