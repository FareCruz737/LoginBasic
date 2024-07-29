var one = document.getElementById('one'); 
var two = document.getElementById('two'); 

fetch('http://localhost:3000/meta/verificar')
.then((res) => res.json())
.then((data) => {
const saber = document.createElement('p')
saber.textContent = data.nombre; 

one.appendChild(saber)
})