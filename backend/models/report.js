const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ReportSchema = new Schema({
    Nreport: {
        type: String,
        //required: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'user',
        //required:true
    },
    postR:{
        type: Schema.ObjectId,
        ref: 'post',
        //required:true
    },
    status:{
        type:String,
    /*    enum:[
            "active",
            "inactive",
            "pending"
        ],
        default:"pending"*/
    }
})

module.exports = mongoose.model('report', ReportSchema);