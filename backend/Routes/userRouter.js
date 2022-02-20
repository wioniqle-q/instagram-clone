import express from "express";
import { loginUser, registerUser, editUser, deleteUser, getUser } from "../Controller/userController.js";

const router = express.Router();

router.post("/register", registerUser)
router.post("/login", loginUser)
router.put("/edit/:_id", editUser)
router.delete("/:_id", deleteUser)
router.get("/:_id", getUser)

export default router;