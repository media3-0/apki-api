// @flow
import type { User } from '../typedefs';
import UserModel from '../domain/model';

type Args = {
  limit?: number,
};

async function allUsers(_: {}, { limit }: Args = {}): Promise<[User]> {
  const result = await UserModel.find().limit(limit);
  return result;
}

export default allUsers;
