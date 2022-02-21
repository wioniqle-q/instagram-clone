import express from "express";      
import { sendMessage } from "../Controller/messageController.js";

const router = express.Router();


router.post("/new", sendMessage)


export default router;