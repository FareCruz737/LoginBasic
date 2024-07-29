const year = document.getElementById('edad'); 

document.addEventListener('DOMContentLoaded', () => {

    year.addEventListener('year', () => {
        // Reemplaza cualquier carácter que no sea un número
        year.value = year.value.replace(/\D/g, '');
    });

    year.addEventListener('keypress', (event) => {
        // Permite solo teclas numéricas (0-9) y el backspace
        if (event.key !== 'Backspace' && !/^[0-9]$/.test(event.key)) {
            event.preventDefault();
        }
    });
});