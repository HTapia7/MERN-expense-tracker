import express from "express";
import { ExpenseModel } from "../Expenses.js"; 

const router = express.Router();

router.get("/expenses" , async (req, res) => {
    const expense = await ExpenseModel.find();

    return res.send(expense)
});

router.post("/add-expense" , async (req , res) => {
    const { text , amount } = req.body
    
    const expense = new ExpenseModel( { text , amount})
    await expense.save()

    res.json({ message: "New Expense added"})
});

router.delete("/delete-expense" , async ( req , res ) => {

});


export { router as expenseRouter };