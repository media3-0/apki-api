import mongoose from 'mongoose';

const supportRoles = 'admin|moderator|teacher|students';
const ruleRegex = new RegExp(`/[${supportRoles}]\b/`);

const userSchema = mongoose.Schema({
  nickname: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  uid: String,
  password: String,
  roles: {
    type: [String],
    validate: {
      validator(roles) {
        const isRulesValid = roles.every(role => ruleRegex.test(role));

        return isRulesValid;
      },
      message: `'{VALUE}' is not a valid roles! Supported rules are: ${supportRoles}`,
    },
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  }],
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
