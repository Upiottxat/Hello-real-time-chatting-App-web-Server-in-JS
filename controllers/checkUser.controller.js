import User from "../Models/user.model.js"
export const checkEmail = async (req, res) => {
    const email = req.query.email;

    if (!email) return res.status(403).json({ error: 'Invalid email' });
    try {

        const user = await User.findOne({ email: email });

        if (user) {
            user = []

            return res.status(200).json({
                user: true,
                msg: "Email already exists",
            })
        } else {

            return res.status(200).json({
                user: false,

            });
        }


    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: "Internal Server Error",
            msg: "Internal Server Error",
        });
    }

}

export const checkUserName = async (req, res) => {
    const username = req.query.username;
    if (!username) return res.status(403);
    try {

        const user = await User.findOne({ username: username });

        if (user) {
            user = [];
            return res.status(200).json({
                user: true,
                msg: "username already taken",
            })
        } else {

            return res.status(200).json({
                user: false,
                msg: "username is available",
            });
        }


    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: "Internal Server Error",
            msg: "Internal Server Error",
        });
    }

}