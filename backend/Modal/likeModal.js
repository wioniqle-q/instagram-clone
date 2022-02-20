import mongoose from "mongoose";


const likeSchema = new mongoose.Schema({
    whoLikes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
});