import User from "../Models/user.model.js";

export const getUserForSideBar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password")

        res.status(200).json(filteredUsers)

    } catch (error) {
        console.log("error in  get user  getUserForSideBar  controller  ", error.message);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        })
    }
}