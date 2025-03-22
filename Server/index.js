import express from "express";
const app = express();
import bodyParser from "body-parser";
import cors from "cors"
import dotenv from 'dotenv';
dotenv.config();
//console.log("MONGO_URI:", process.env.MONGO_CONN);
import './Models/db.js';
import router from './Routes/AuthRouter.js'



const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res)=>{
    res.send("PONG");
})

app.use(bodyParser.json());
app.use(cors());
app.use('/auth',router);

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
});