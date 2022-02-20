import express from "express";
import { loginUser, registerUser, editUser, deleteUser } from "../Controller/userController.js";

const router = express.Router();

router.post("/register", registerUser)
router.post("/login", loginUser)
router.put("/:_id",editUser)
router.delete("/:_id",deleteUser)


export default router;