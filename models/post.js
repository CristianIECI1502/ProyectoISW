const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const PostSchema= new Schema({
    description:{
        type: String,
        required: true
    },
    /*like:{
        type:Schema.ObjectID,
        ref:'like'
    },*/
    createdAt:{
        type: Date,
        default: Date.now()
    },
    comment: {
        type: Schema.ObjectId,
        ref: 'comment'
    },
    user: {
        type: Schema.ObjectId,
        ref: 'user'
    },
});

module.exports =mongoose.model('post',PostSchema);