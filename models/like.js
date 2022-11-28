const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const LikeSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: "user",
        required: true
    },
    publicacion:{
        type: Schema.ObjectId,
        ref : "post",
        required: true
    },
    numero: {
        type: Number,
        default: "0"

    }
})

module.exports = mongoose.model("like", LikeSchema);