const anuncio = document.querySelector('.anuncio');
const iconosCaracteristicas = document.querySelector('.iconos-caracteristicas');
const botonAmarillo = document.querySelector('.boton-amarillo');

anuncio.addEventListener('click', function() {
    console.log("Haciendo clic en el anuncio")
    e.stopPropagation();
});
iconosCaracteristicas.addEventListener('click', function() {
    e.stopPropagation();
    console.log("Haciendo clic en los iconos")

});
botonAmarillo.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("Haciendo clic en el enel boton")

});