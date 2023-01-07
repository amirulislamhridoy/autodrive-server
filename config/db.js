const mongoose = require('mongoose');
require('dotenv').config()

const dbURL = process.env.DB_URL || `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.tz1m28p.mongodb.net/?retryWrites=true&w=majority`
// mongodb+srv://autodrive:32202910@cluster0.tz1m28p.mongodb.net/?retryWrites=true&w=majority

mongoose.connect(dbURL)
    .then(() => {
        console.log('MongoDB atlas is connected!')
    })
    .catch((error) => {
        console.log(error);
    });
