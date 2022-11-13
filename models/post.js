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
    },
    user:{
        type:Schema.ObjectID,
        ref:'user'
    },*/
    createdAt:{
        type: Date,
        default: Date.now()
    },
    comment: {
        type: Schema.ObjectId,
        ref: 'comment'
    }
});

module.exports =mongoose.model('post',PostSchema);