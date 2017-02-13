// @flow
import type { Post } from '../typedefs';

import { posts } from '../domain';

function getAllPosts({ limit }: { limit?: number } = {}): [Post] {
  if (limit) {
    return posts.slice(0, limit);
  }

  return posts;
}

export { getAllPosts };
