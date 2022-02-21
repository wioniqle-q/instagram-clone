import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    password: String,
    email: {
        type: String,
        unique: true,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    message: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Message",
        }
    ],
    isActive: Boolean,
});

const User = mongoose.model("User", userSchema)

export default User;