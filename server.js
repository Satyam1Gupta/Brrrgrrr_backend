import express from 'express';
import connection from './database/db.js';
import Router from './routes/route.js';
import cors from 'cors';
import bodyParser from "body-parser";
import dotenv from 'dotenv';
 
//import path from 'path'

dotenv.config();
const app=express();
//const server=http.createServer(app)//server created for chat app
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static( "./client/build"));
app.get("/",(req,res)=>{
     res.send('Brrrgrrr server is running')
})

app.use('/',Router);

const PORT=process.env.PORT || 8000;
app.listen(PORT, ()=>{console.log(`server is running on port ${PORT}`)});

const username=process.env.DB_USERNAME;
const password=process.env.db_password;
const DB=process.env.MONGODB_URI ||`mongodb+srv://${username}:${password}@cluster0.i4nhnfk.mongodb.net/Burger?retryWrites=true&w=majority`;

connection(DB);
// const bodyParser = require('body-parser'); 
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }))
