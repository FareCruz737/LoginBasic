import { Router } from "express";
import db from '../model/model.js'


const {pathname: root} = new URL('./backend/otros/personas.html', import.meta.url)


// Registrarse
const sever = Router(); 

sever.post('/Registro', async (req,res) => {
const {nombre, apellido, edad, pais, email, clave} = req.body; 
const todo = req.body; 

if(!nombre || !apellido || !edad || !pais || !email || !clave) return console.log('Faltan datos'); 

const find = await db.findOne({email: email}); 

if(find){return res.status(409).send('Ya estas registrado')}; 

const guardar = new db({nombre, apellido, edad, pais, email, clave}); 
await guardar.save(); 

console.log(todo)
})

// verificar
sever.post('/verificar', async (req, res) => {
const {email, clave} = req.body; 

if(!email || !clave) {return res.sendStatus(406); }

const find = await db.findOne({email,clave}); 

if(!find) return res.status(404).send('usario no encontrado')

console.log('Eres Bienvenido')

})




export default sever
