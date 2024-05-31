import express from "express";
import { checkEmail, checkUserName } from "../controllers/checkUser.controller.js";
const router = express.Router();

router.get("/username", checkUserName)

router.get("/email", checkEmail)

export default router;