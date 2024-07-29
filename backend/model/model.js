import mongoose from "mongoose";

const model = mongoose.Schema({
nombre:String, 
apellido: String, 
edad:Number, 
pais:String, 
email:String, 
clave:String
})

const db = mongoose.model('personas', model); 

export default db