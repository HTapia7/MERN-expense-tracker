import express from "express";
import { ExpenseModel } from "../Expenses.js"; 
import mongoose from "mongoose";

const router = express.Router();

router.get("/expenses" , async (req, res) => {
    const expense = await ExpenseModel.find();

    return res.send(expense)
});

router.post("/add-expense" , async (req , res) => {
    const { text , amount } = req.body
    
    const expense = new ExpenseModel( { text , amount })
    await expense.save()

    res.json({ message: "New Expense added"})
});

router.delete("/delete-expense/:id" , async ( req , res ) => {

    try {
        const { id } = req.params

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400)
            .json({ error: "Invalid Id" });
        }

        const deleteExpense = await ExpenseModel.findByIdAndDelete(id);

        if(!deleteExpense){
            return res.status(400)
            .json({ error: "Item not found"});
        }
        return res.status(200)
        .json({ message: "Item deleted"})

    } catch (error) {
        return res.status(500)
        .json({ error: "server error"})
    }

});

router.put("/update-expense/:id" , async ( req , res ) => {

    try {
        const { id } = req.params
        const updateExpense = req.body

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400)
            .json({ error: "Invalid Id" });
        }

        const newExpense = await ExpenseModel.findByIdAndUpdate(id , updateExpense , {
            new: true,
        });

        if(!newExpense){
            return res.status(400)
            .json({ error: "ID is invalid"});
        }
        return res.status(200)
        .json({ message: "Item Updated"})

    } catch (error) {
        return res.status(500)
        .json({ error: "server error"})
    }

});


export { router as expenseRouter };