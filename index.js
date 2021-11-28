// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();
// // import route from "./route/Route.js"
// const myroutes = require("./server/Route")

// app.use('/show', myroutes);


// const PORT = process.env.PORT || 3001;
// const URL = 'mongodb+srv://mananchhabra:mananchhabra@cluster0.lmzxz.mongodb.net/cluster0?retryWrites=true&w=majority';
// mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server listening on ${PORT}`);
//   });
// }).catch(error => {
//   console.log(`Error : `, error.message);
// })

import express from 'express';
import bodyParser from 'body-parser';
// import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import Routes from './server/route.js';
import postRouter from './server/postRoute.js';

const app = express();
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/posts', postRouter);
app.use('/users', Routes);

const URL = 'mongodb+srv://mananchhabra:mananchhabra@cluster0.lmzxz.mongodb.net/cluster0?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3001;

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true}).then(() => { 
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})
