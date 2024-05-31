import Conversation from "../Models/conversation.model.js";
import Message from "../Models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }
        const newMessage = new Message({
            senderId: senderId,
            receiverId: receiverId,
            message: message
        })
        if (newMessage) {
            conversation.messages.push(newMessage._id)
        }

        //SOCKET IO FUNCTIONALITY WILL GO HERE


        // await conversation.save();
        // await newMessage.save();
        await Promise.all([conversation.save(), newMessage.save()])
        res.status(201).json(newMessage)


    } catch (error) {
        console.log("error in  send message controller ", error.message);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        })
    }
}
export const getMessages = async (req, res) => {
    try {

        const { id: userToChatID } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatID] }
        }).populate("messages") //return actual msg not refernce


        if (!conversation) {
            res.status(200).json([])
        }

        res.status(200).json(conversation.messages)

    } catch (error) {
        console.log("error in  get message controller ", error.message);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        })
    }
}