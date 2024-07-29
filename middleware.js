console.clear();
import dotenv from 'dotenv'; 
import express from 'express';
import cors from 'cors'; 
import mongoose from 'mongoose';
import sever from './backend/otros/sever.js';
import bodyParser from 'body-parser';

const url = process.env.URL;
const PORT = process.env.PORT || 5000; 
const app = express(); 

app.use(express.static("otros"))
app.use(bodyParser.json())
app.use(express.json());  
app.use(express.text()); 
app.use(cors()); 
app.use('/meta',sever)


const ran = async () => {
    mongoose.connect(url)
    .then(() => console.log('Conectados'))
    .catch((err) => console.log(err)); 

app.listen(PORT, () => {console.log(`Estamos en el puerto ${PORT}`); 
})
}

ran(); 