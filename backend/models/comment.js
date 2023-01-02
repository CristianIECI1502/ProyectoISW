const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CommentSchema = new Schema({
    comentario: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    post: {
        type : Schema.ObjectId,
        ref : 'post',
        required : false
    },
    user: {
        type : Schema.ObjectId,
        ref : 'user',
        required : false
    }
})

module.exports = mongoose.model('comment', CommentSchema);