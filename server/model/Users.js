import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        password: true
    },
});

export const userModel = mongoose.model("users" , UserSchema);