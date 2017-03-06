import PostModel from './model';
import { Types } from 'mongoose';

describe('TestPostModel', () => {
  it('should validate errors occur if required fields are not set', () => {
    // given
    const model = new PostModel();

    // when
    const validateErr = model.validateSync();

    // then
    ['title', 'content', 'author'].forEach((property) => {
      expect(validateErr.errors[property]).toBeDefined();
    });
  });

  it('should no errors occur if all required fields are set', () => {
    // given
    const model = new PostModel({
      author: Types.ObjectId(),
      title: 'title',
      content: 'content',
    });

    // when
    const validateErr = model.validateSync();

    // then
    expect(validateErr).toBeUndefined();
  });
});
