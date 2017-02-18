import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  nickname: String,
  email: String,
  uid: String,
  password: String,
  roles: [String],
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
