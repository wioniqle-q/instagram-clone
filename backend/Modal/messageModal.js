import mongoose from "mongoose";


const messageSchema = new mongoose.Schema({
    author:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
    },
    message: {
        type: String,
    }
});

const Message = mongoose.model("Message", messageSchema);

export default Message;