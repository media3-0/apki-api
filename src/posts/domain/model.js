import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  content: String,
});

const PostModel = mongoose.model('Post', postSchema);

export default PostModel;
