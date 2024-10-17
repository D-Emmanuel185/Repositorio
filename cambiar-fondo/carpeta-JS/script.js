const botonRojo = document.getElementById('boton-rojo');
botonRojo.addEventListener('click', function () {
    document.body.style.backgroundColor = 'red';
});

const botonVerde = document.getElementById('boton-verde');
botonVerde.addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
});

const botonAzul = document.getElementById('boton-azul');
botonAzul.addEventListener('click', function () {
    document.body.style.backgroundColor = 'blue';
});

const botonBlanco = document.getElementById('boton-restablecer');
botonBlanco.addEventListener('click', function () {
    document.body.style.backgroundColor = 'white';
});