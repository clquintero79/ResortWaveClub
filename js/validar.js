//**Varoables */

const formulario = document.querySelector('.contacto');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const telefono = document.querySelector('#telefono');
const mensaje = document.querySelector('#mensaje');
const inputValida = document.querySelectorAll('.inputValida');




//Listeners


capturarEvento();

function capturarEvento() {

    inputValida.forEach(input => {
        input.addEventListener('blur', eventBlur);
        input.addEventListener('keypress', eventoKey);

    });
    // nombre.addEventListener('blur', eventBlur);
    // email.addEventListener('blur', eventBlur);
    // telefono.addEventListener('blur', eventBlur);
    // mensaje.addEventListener('blur', eventBlur);
    console.log('entro a la captura');

}

function eventoKey(e) {
    document.querySelector("#" + e.target.id).style.background = "white";
    //desaparecemos el span de campo obligatorio

    document.querySelector("[for=" + e.target.id + "] .obligatorio").classList.remove('error');
    document.querySelector("[for=" + e.target.id + "] .obligatorio").style.display = 'none';
}

function eventBlur(e) {
    console.log(e.target.value);

    if (e.target.value.length > 0 && e.target.value.trim() !== "") {
        console.log('bien');



    } else {
        console.log("El valor es", e.target.value);
        console.log('algo paso');
        console.log(e.target.parentNode);
        document.querySelector("#" + e.target.id).style.background = "rgba(255,0,0,.05)";
        document.querySelector("#" + e.target.id).style.borderBottom = "6px solid rgba(255, 0, 0, 0.8) ";
        document.querySelector("[for=" + e.target.id + "] .obligatorio").style.display = 'block';
        document.querySelector("[for=" + e.target.id + "] .obligatorio").style.color = 'rgba(255,0,0,.5)';
        document.querySelector("[for=" + e.target.id + "] .obligatorio").style.color = 'rgba(255,0,0,.5)';
        document.querySelector("[for=" + e.target.id + "] .obligatorio").innerHTML = '* Campo Obligatorio';
        document.querySelector("[for=" + e.target.id + "] .obligatorio").className.add('error');
        console.log("[for=" + e.target.id + "] .obligatorio")


    }
}