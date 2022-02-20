import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    image: String,
    isActive: Boolean,
});

export default UserSchema

modulee.exports = mongoose.model("User", UserSchema);