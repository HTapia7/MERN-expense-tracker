const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

mongoose.connect(
    "mongodb+srv://expenseTracker:MERNexpenseTracker@expense-tracker-db.8w37ga6.mongodb.net/?retryWrites=true&w=majority"
);


app.listen(3001,() => console.log('Server Started!!!'));