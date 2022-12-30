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
    user: {
        type: Schema.ObjectId,
        ref: 'user',
//        required:true
    },
});

module.exports =mongoose.model('post',PostSchema);