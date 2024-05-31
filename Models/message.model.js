import mongoose from "mongoose";
import User from "../Models/user.model.js"
const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        require: true
    },
    receiverId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        require: true
    },
    message: {
        type: String,
        require: true
    }
    //created at and updated at 
}, { timestamps: true })
const Message = mongoose.model("Message", messageSchema);
export default Message