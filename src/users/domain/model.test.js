import UserModel from './model';

describe('TestPostModel', () => {
  it('should validate errors occur if required fields are not set', () => {
    // given
    const model = new UserModel();

    // when
    const validateErr = model.validateSync();

    // then
    ['nickname', 'email', 'roles'].forEach((property) => {
      expect(validateErr.errors[property]).toBeDefined();
    });
  });

  it('should validate error occur for invalid roles', () => {
    // given
    const m = new UserModel({
      nickname: 'nickname',
      email: 'email',
      roles: ['invalid', 'rules'],
    });

    // when
    const validateErr = m.validateSync();

    // then
    expect(validateErr.errors.roles.message).toContain('is not a valid roles');
  });

  it('should no errors occur if all required fields are properly set', () => {
    // given
    const m = new UserModel({
      nickname: 'nickname',
      email: 'email',
      roles: ['admin', 'moderator', 'teacher', 'student'],
    });

    // when
    const validateErr = m.validateSync();

    // then
    expect(validateErr).toBeUndefined();
  });
});
