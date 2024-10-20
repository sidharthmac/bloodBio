import express from 'express';
import dotenv from "dotenv";
import dataBseConnectn from './database.js'
import {createUser,getUser,loginUser,donnerController, findDonor} from './api/user.js'
import bodyParser from 'body-parser'; 
import cors from 'cors';

const app = express()
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000', // Specific to your frontend port
    credentials: true,  // Required if you're sending cookies or other credentials
  }));

dotenv.config({ path: './dotenv.env' });

  



dataBseConnectn()    

app.post("/api/createUser",createUser)
app.get("/api/getUser",getUser)
app.post("/api/login",loginUser)
app.post("/api/createDonner",donnerController)
app.post("/api/findDonor",findDonor)


app.listen(4000, () => {
    console.log('Server is listening on port 4000');
  });
  