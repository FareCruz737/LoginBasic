const button = document.getElementById('button'); 


button.addEventListener('click', (e) => {
e.preventDefault(); 
    var open = {
    email: document.getElementById('email').value, 
    clave: document.getElementById('clave').value
    }
let modi = JSON.stringify(open); 
console.log(modi)
fetch('http://localhost:3000/meta/verificar', {
method: 'post', 
headers:{ 'Content-Type':'application/json'},
body: modi
})
})


// enviar al registro 
