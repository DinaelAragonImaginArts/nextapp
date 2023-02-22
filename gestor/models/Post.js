import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    content:{
        type: String,
        trim: true,
    },
    slug:{
        type: String,
        trim: true,
        required: true,
    },
    estado:{
        type: String,
        trim: true,
        required: true,
    }
},
    {
        timestamps: true,
    });

const Post = mongoose.model('Post', postSchema);

export default Post;