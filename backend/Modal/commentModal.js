import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    comment: {
        type: String,
    }
})