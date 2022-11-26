const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CommentSchema = new Schema({
    dcomentario: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('comment', CommentSchema);