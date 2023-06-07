import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../Users.js"

const router = express.Router();

router.post("/register" , async (req , res ) => {
    const { username , password } = req.body;
    
    const user = await UserModel.findOne( { username }); 

    if(user) {
        return res.json('user already exist');
    } 

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ username, password: hashedPassword });
    await newUser.save();

    res.json({ message: "New User Registered!"})
});

export { router as userRouter };