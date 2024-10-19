import express from 'express';
import dotenv from "dotenv";
import dataBseConnectn from './database.js'
import {createUser,getUser,loginUser} from './api/user.js'
import bodyParser from 'body-parser'; 
import cors from 'cors';

const app = express()
app.use(bodyParser.json());
app.use(cors());
dotenv.config({ path: './dotenv.env' });
  
dataBseConnectn()    

app.post("/api/createUser",createUser)
app.get("/api/getUser",getUser)
app.post("/api/login",loginUser)

 app.listen(process.env.PORT,()=>{
 console.log("server is listening on PORT :", process.env.PORT)
})