import User from "../Models/user.model.js"
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js";
export const signup = async (req, res) => {

    try {


        const { fullName, username, email, password, conformPassword, gender } = req.body;

        if (!(password === conformPassword)) {
            console.log(password, conformPassword);
            return res.status(400).json({
                success: false,
                error: "password doesnot match",

            })
        }
        const user = await User.findOne({ username: username })
        if (user) {
            return res.status(400).json({
                success: false,
                error: "Username already exists",

            })
        }
        // const checkEmail = await User.findOne({ email: email })
        // if (checkEmail) {
        //     return res.status(400).json({
        //         success: false,
        //         error: "Email already exists",

        //     })
        // }
        // checkEmail = []

        //HASH password HEAR
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)



        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        const newUser = new User({
            fullName,
            username,
            email: email,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })
        await newUser.save();
        if (newUser) {
            //Generate JWT token  here 
            const token = await generateTokenAndSetCookie(newUser._id, res)
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
                success: true,
                token: token


            })
        } else {
            res.status(400).json({
                success: false,
                error: "Invalid user data"
            })
        }
    } catch (error) {
        console.log("error in  signup controller ", error.message);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        })
    }
};


export const login = async (req, res) => {
    // console.log(res);
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ $or: [{ username: username }, { email: username }] })

        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid username or password" })
        }
        generateTokenAndSetCookie(user._id, res);
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        })
    } catch (error) {
        console.log("error in  login controller ", error.message);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        })
    }


}

export const logout = (req, res) => {

    try {
        res.cookie("jwt", "", { maxAge: 0 })
        res.status(200).json({
            message: "Logged out successfully"
        })

    } catch (error) {
        console.log("error in  logout controller ", error.message);
        res.status(500).json({
            success: false,
            error: "Internal server error",
        })
    }


}

