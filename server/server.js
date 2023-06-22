import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import { userRouter } from './model/routes/users.js';
import { expenseRouter } from './model/routes/expenses.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth' , userRouter)
app.use('/' , expenseRouter)


mongoose.connect(
    "mongodb+srv://owner1:MERNexpTracker1@tracker.bzugyef.mongodb.net/tracker?retryWrites=true&w=majority"
);


app.listen(3001,() => console.log('Server Started!!!'));