 // getElementById

 var logo = document.getElementById('logo');
 var navegacion = document.getElementById('navegacion');
 navegacion.style.display = "none";
 var cab1 = document.getElementById('cab1');
 cab1.style.color = "#F00";
 cab1.style.background = "black";
 cab1.textContent = "Cambiando texto con textContent";
 cab1.innerText = "Nuevamente pero ahora con innerText";


 // QuerySelector seleccionando id

 //  var navegacion = document.querySelector("#navegacion");
 //  console.log(navegacion);
 //  navegacion.style.display = "block";
 //  navegacion.style.background = "green";

 // QuerySelector seleccionando clases

 //  var contenedor_footer = document.querySelector(".contenedor-footer");
 //  console.log(contenedor_footer);
 //  contenedor_footer.style.padding = "10rem";
 //  contenedor_footer.style.background = "purple";

 // QuerySelector seleccionando por etiqueta

 //  var footer = document.querySelector("footer");
 //  console.log(footer);
 //  footer.style.background = "cyan";

 //Query Selector seleccionado como en css

 //  var enlaces = document.querySelector("#navegacion a");
 //  console.log(enlaces);

 //Query Selector seleccionado como en css el primer enlace

 //  var enlace = document.querySelector("#navegacion a:first-child");
 //  enlace.style.background = "black";
 //  console.log(enlace);

 //Query Selector seleccionado como en css el último enlace

 //  var enlace = document.querySelector("#navegacion a:last-child");
 //  enlace.style.background = "yellow";
 //  enlace.innerText = "Galeria";
 //  console.log(enlace);

 //Query Selector seleccionado como en css un enlace determinado

 //  var enlace = document.querySelector("#navegacion a:nth-child(2)");
 //  enlace.style.background = "brown";

 //  console.log(enlace);





 //GetElementsByClassName

 //  var enlaces = document.getElementsByClassName("enlaces");
 //  console.log(enlaces);
 //  console.log(enlaces[2]);
 //  var enlaces = document.getElementsByClassName("enlaces")[3];
 //  console.log(enlaces);

 //Query Selector seleccionado como en css pero todos los enlaces
 //  var enlaces = document.querySelectorAll("#navegacion a");
 //  console.log(enlaces);

 //GetElementsByTagName

 //  var encabezados = document.getElementsByTagName('h2')
 //  console.log(encabezados);

 //Para convertir en arreglos y recorrer

 //  var encH2 = Array.from(encabezados);
 //  console.log(encH2);
 //  encH2.forEach((element) => {
 //      console.log(`Texto del h2: ${element.textContent} `);

 //  });

 //  var encH2 = Array.from(encabezados);
 //  console.log(encH2);
 //  encH2.forEach((element, index) => {
 //      console.log(`Texto del h2: ${index} ${element.textContent} `);

 //  });

 //QuerySelectorAll

 //  var enlaces = document.querySelectorAll(".enlaces");
 //  console.log(enlaces);
 //  console.log(enlaces[1]);
 //  var enlaces = document.getElementsByClassName("enlaces")[3];
 //  enlaces.style.fontSize = "10rem";
 //  console.log(enlaces);
 //enlaces impares
 //  var enlacesImpares = document.querySelectorAll(".enlaces:nth-child(odd)");
 //  console.log(enlacesImpares);
 //  var arreEnlaces = Array.from(enlacesImpares);
 //  arreEnlaces.forEach(element => {
 //      element.style.background = "cyan";
 //      enlaces.style.fontSize = "2rem";

 //  });
 //enlaces pares
 //  var enlacesPares = document.querySelectorAll(".enlaces:nth-child(even)");
 //  console.log(enlacesPares);
 //  var arreEnlaces = Array.from(enlacesPares);
 //  arreEnlaces.forEach(element => {
 //      element.style.background = "brown";
 //      enlaces.style.fontSize = "2rem";

 //  });

 //Traversing

 //  var nav = document.querySelector('#navegacion');
 //  console.log(nav);
 //  //Obtener los hijos
 //  console.log(nav.children);
 //  //el nombre el nombre del nodo
 //  console.log(nav.children[0].nodeName);
 //  console.log(nav.nodeName);
 //  //Tipos de nodos

 //console.log(nav.children[0].nodeType);

 //1 Elementos
 //2 Atributos
 //3 textNode
 //8 comentarios


 //  var barra = document.querySelector('.barra');
 //  console.log(barra);
 //  console.log(barra.children);
 //  console.log(barra.children[2].children);

 //  var seccion = document.querySelector(".seccion");
 //  console.log(seccion);
 //  console.log(seccion.children);
 //  console.log(seccion.children[1]);
 //  console.log(seccion.children[1].children);
 //  console.log(seccion.children[1].children[1].children);
 //  seccion.children[1].children[1].children[1].textContent = "Es mentira es el más costoso";
 //  console.log(seccion.children[1].children[1].lastElementChild);

 //  //Ir hacia el padre
 //  var anuncios = document.querySelectorAll('.anuncio');
 //  console.log("anuncios", anuncios[0]);
 //  console.log('El padre del primer anuncio es:', anuncios[0].parentElement);
 //  console.log('El padre del primer anuncio es:', anuncios[0].parentElement.parentElement);

 //  console.log('Los hijos del apdre:', anuncios[0].parentElement.parentElement.children);
 //  console.log('El primerhijo del padre:', anuncios[0].parentElement.parentElement.children[0]);
 //  console.log('Cambiando el texto con traversing:', anuncios[0].parentElement.parentElement.children[0].textContent = "Cabañas hermosas");

 //  //Para ver los que estan en el mismo nivel

 //  console.log("anuncios", anuncios[2].previousElementSibling);
 //  console.log("anuncios", anuncios[1].nextElementSibling);

 //  console.log("Imagen del primer anuncio", anuncios[0].children[0].getAttribute('src'));
 //  console.log("Voy hacia atras del tercer anuncio", anuncios[2].previousElementSibling.children[0].getAttribute('src'));
 //  console.log("Voy hacia adelante del segundo anuncio", anuncios[1].nextElementSibling.children[0].getAttribute('src'));

 //  //Crear elementos desde el código

 //  var navegacion = document.querySelector('#navegacion')
 //  console.clear();
 //  console.log(navegacion);
 //  var enlace = document.createElement('a');
 //  enlace.className = 'enlace';
 //  console.log(enlace);
 //  enlace.setAttribute('href', 'videos.html');
 //  console.log(enlace);
 //  enlace.innerText = "Videos";
 //  console.log(enlace);
 //  navegacion.appendChild(enlace);
 //  console.log("Nùmero de hijos de navegacion", navegacion.children.length);

 //  //Reemplazar elementos

 //  console.clear();
 //  var cab1 = document.querySelector('#cab1');
 //  console.log(cab1);
 //  var padre = cab1.parentNode;
 //  console.log("Este es el padre", padre);
 //  var ncab2 = document.createElement('h3');
 //  ncab2.className = 'ncab2';
 //  console.log(ncab2);
 //  console.log(ncab2);
 //  ncab2.innerText = "Resorte proximamente cerrará";
 //  console.log(ncab2);
 //  padre.replaceChild(ncab2, cab1);
 //  console.clear();


 //  //Borrar elementos
 //  var navegacion = document.querySelector('#navegacion')
 //  console.log(navegacion);
 //  var enlaces = navegacion.children;
 //  console.log(enlaces);
 //  //Desde el mismo selector
 //  enlaces[0].remove();
 //  //Tomando como referencia el padre
 //  navegacion.removeChild(enlaces[3]);
 //  console.clear();


 //  //Adicionar atributos

 //  var enlaces = document.querySelector(".enlaces");
 //  console.log(enlaces);
 //  enlaces.classList.add("enlace1");
 //  console.log(enlaces);


 //  //Creando un enlace con una imagen

 //  var img = document.createElement('img');
 //  img.className = 'linkimg';
 //  img.setAttribute("src", "img/icono1.svg");
 //  console.log(img);
 //  var enlace = document.createElement('a');
 //  enlace.className = 'enlace';
 //  console.log(enlace);
 //  enlace.setAttribute('href', 'videos.html');
 //  console.log(enlace);
 //  enlace.appendChild(img);
 //  console.log(enlace);
 //  navegacion.appendChild(enlace);

 //  //comprobar que tiene un atributo


 //  console.log("Tiene el atributo href?", enlace.hasAttribute("href"));


 //*************Add Event Listener

 //  var btn = document.querySelector('.boton');
 //  console.log(btn);
 //  btn.addEventListener('click', function() {

 //      alert("hicieron clic");
 //  });


 //  var btn = document.querySelectorAll('.boton');
 //  console.log(btn);
 //  var arreglobtn = Array.from(btn);
 //  arreglobtn.forEach(element => {
 //      element.addEventListener('click', function() {
 //          alert("hicieron clic" + element.classList);
 //      });
 //  });

 //Evitar que el navegador se vaya a la pagina

 //  var btn = document.querySelector('.boton');
 //  console.log(btn);
 //  btn.addEventListener('click', function(e) {
 //      e.preventDefault();
 //      console.log(e);
 //      //Visualizar el origen
 //      console.log(e.target);
 //      console.log(e.target.innerText);
 //      console.log(e.target.className);
 //      alert("hicieron clic");
 //  });


 //Evento clic en otros elementos
 //  console.clear();
 //  var blog = document.querySelector(".blog");
 //  console.log(blog);
 //  var entrada = blog.children[1];
 //  console.log(entrada);
 //  var hijo = entrada.children[0].children[0];
 //  hijo.addEventListener('click', function(e) {
 //      e.target.setAttribute('src', 'img/blog2.jpg');
 //      console.log(e);

 //  });


 //Evento clic en otros elementos
 console.clear();
 //  var blog = document.querySelector(".blog");
 //  console.log(blog);
 //  var entrada = blog.children[1];
 //  console.log(entrada);
 //  var hijo = entrada.children[0].children[0];
 //  hijo.addEventListener('click', function(e) {

 //      console.log('hiciste click');
 //      let attr = e.target.getAttribute('src')
 //      console.log(attr);
 //      if (attr == "img/blog1.jpg") {
 //          e.target.setAttribute('src', 'img/blog2.jpg');
 //      }
 //      //else {
 //      //      e.target.setAttribute('src', 'img/blog1.jpg');

 //      //  }
 //      //console.log(e);

 //  });

 //console.log(hijo);

 //**********EVentos con el mouse */
 //  console.clear();
 //  const centrarTexto = document.querySelector('.centrar-texto');
 //  console.log(centrarTexto);

 //  centrarTexto.addEventListener('click', capturarEvento);
 //  centrarTexto.addEventListener('dblclick', capturarEvento);
 //  centrarTexto.addEventListener('mouseover', capturarEvento);
 //  centrarTexto.addEventListener('mouseout', capturarEvento);
 //  centrarTexto.addEventListener('mousemove', capturarEvento);
 //  centrarTexto.addEventListener('mousedown', capturarEvento);
 //  centrarTexto.addEventListener('mouseup', capturarEvento);

 //  function capturarEvento(e) {
 //      console.log("Tipo de evento ", e.type);

 //  }
 //  function capturarEvento(e) {
 //     console.log("Tipo de evento ", e.type);
 //     if (e.type == 'mouseup') {
 //         centrarTexto.style.background = "red";

 //     }else if (e.type == "mousedown")
 //     {
 //        centrarTexto.style.background = "purple";
 //     }
 // }