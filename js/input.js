const nombre = document.querySelector('#nombre');
console.log(nombre);
const texto = document.querySelector('.formC');
const opciones = document.querySelector('#opciones');
nombre.addEventListener('keypress', capturarEvento);
nombre.addEventListener('keydown', capturarEvento);
nombre.addEventListener('keyup', capturarEvento);
nombre.addEventListener('blur', capturarEvento);
nombre.addEventListener('focus', capturarEvento);
nombre.addEventListener('cut', capturarEvento);
nombre.addEventListener('copy', capturarEvento);
nombre.addEventListener('paste', capturarEvento);
nombre.addEventListener('input', capturarEvento);
opciones.addEventListener('change', capturarEvento);

function capturarEvento(e) {
    console.log(nombre.value);
    console.log(opciones.value);
    console.log("Tipo de evento ", e.type);

}



// function capturarEvento(e) {
//     texto.innerText = nombre.value;
//     console.log(nombre.value);
//     console.log("Tipo de evento ", e.type);
//     //Cuando es el evento focus
//     if (e.type == "focus") {

//         nombre.classList.add("cambiarFoco");
//         nombre.classList.remove("cambiarFoco2");
//         console.log(nombre.classList);
//         console.log(nombre);

//     }
//     if (e.type == "blur") {
//         nombre.classList.remove("cambiarFoco");
//         nombre.classList.add("cambiarFoco2");
//         console.log(nombre.classList);
//         console.log(nombre);

//     }

// }