const User = `
  type User {
    nickname: String!
    email: String!
    uid: String
    password: String
    roles: [String]
  }
`;

export default () => [User];
