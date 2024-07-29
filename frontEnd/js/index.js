const button = document.getElementById('button'); 
 
button.addEventListener('click', (e) => {
e.preventDefault()
let TomarValor = {
     nombre: document.getElementById('nombre').value,
     apellido: document.getElementById('apellido').value,
     edad :document.getElementById('edad').value,
     pais : document.getElementById('pais').value,
     email: document.getElementById('email').value, 
     clave: document.getElementById('clave').value


}
let mandar = JSON.stringify(TomarValor)
console.log(mandar)

fetch('http://localhost:3000/meta/Registro', {
method: 'post', 
headers:{ 'Content-Type':'application/json'},
body: mandar
})


})