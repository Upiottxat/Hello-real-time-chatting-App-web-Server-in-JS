import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";

import authRoutes from './Routes/auth.routes.js'
import messageRoutes from './Routes/message.routes.js'
import usersRoutes from './Routes/user.routes.js'
import checkUserRoutes from './Routes/checkUser.routes.js'

import connectToMongoDB from "./db/connectToMongoDB.js";

import { Server } from "socket.io"
import createServer from 'http'
const app = express()
const PORT = process.env.PORT || 5050;
dotenv.config();
import cors from 'cors'
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(express.json()); // Parse JSON bodies
app.use(cookieParser())



app.use("/api/auth", authRoutes)

app.use("/api/messages", messageRoutes);

app.use("/api/users", usersRoutes);

app.use("/api/checkUser", checkUserRoutes);





app.get("/", (req, res) => {
    res.send("Hello world !!")
})
app.get("/testJson", (req, res) => {
    res.send(JSON.stringify({ "Hello world": "Hello world " }))
})



const server = app.listen(PORT, () => {
    connectToMongoDB();

    console.log(`Server is running on port ${PORT}`);
})
export default server


