import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({

    text: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const ExpenseModel = mongoose.model("expense" , ExpenseSchema);