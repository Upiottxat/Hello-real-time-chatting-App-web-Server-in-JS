import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("connected to MongoDB");

    } catch (error) {
        console.log("Error connection to MongoDB", error);
    }
}
export default connectToMongoDB;
