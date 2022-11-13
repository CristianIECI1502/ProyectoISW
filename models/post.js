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
    comment:{
        type:Schema.ObjectID,
        ref:'comment'
    },
    user:{
        type:Schema.ObjectID,
        ref:'user'
    },*/
    createdAt:{
        type: Date,
        default: Date.now()
    }
});

module.exports =mongoose.model('post',PostSchema);