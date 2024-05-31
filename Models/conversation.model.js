import mongoose from "mongoose";
import User from "../Models/user.model.js"
const conversationSchema = new mongoose.Schema({

    participants: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    ],
    messages: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Message",
            default: []
        }
    ]


}, { timestamps: true });


const Conversation = mongoose.model("Conversation", conversationSchema)
export default Conversation