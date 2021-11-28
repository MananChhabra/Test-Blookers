import mongoose from 'mongoose';
// import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const postSchema = mongoose.Schema({
    title: String,
    text: String
});

// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, 'user');
// we need to turn it into a model
const postPost = mongoose.model('post', postSchema);

export default postPost;