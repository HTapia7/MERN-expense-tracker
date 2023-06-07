import express from 'express';
import mongoose from 'mongoose';
import { userRouter } from './model/routes/users.js';

const app = express();

app.use(express.json());

app.use('/auth' , userRouter)


mongoose.connect(
    "mongodb+srv://owner1:MERNexpTracker1@tracker.bzugyef.mongodb.net/tracker?retryWrites=true&w=majority"
);


app.listen(3001,() => console.log('Server Started!!!'));