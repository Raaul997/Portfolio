/* Cookies */
const footer = document.getElementById('footer');
const dialog = document.getElementById('dialogo');
const overlay = document.getElementById('overlay');
const cerrar = document.getElementById('cerrar');
const aceptar = document.getElementById('aceptar');

const showDialog = () => {
    dialog.style.display = 'block';
    overlay.style.display = 'block';
};
document.addEventListener('DOMContentLoaded', showDialog);
footer.addEventListener('click', showDialog);
const closeDialog = () => {
    dialog.style.display = 'none';
    overlay.style.display = 'none';
};
cerrar.addEventListener('click', closeDialog);
aceptar.addEventListener('click', closeDialog);
overlay.addEventListener('click', closeDialog);

/* Reseñas */

function agregarComentario(){
    //guardamos el contenido
    var nombre = document.getElementById('name').value;
    var comentario = document.getElementById('review').value;
    if(nombre != '' && comentario != ''){
        /*Creo el contendor del comentario*/
       var div = document.createElement('div');
       div.classList.add("comentario"); // le doy una clase al contenedor

       /*creo los elementos a agregar y añado el contenido */
       var parrafo = document.createElement('h4');
       parrafo.textContent = nombre;
       var contenido = document.createElement('p');
       contenido.textContent = comentario;
       
       /*añado los elementos al contenedor */
       div.appendChild(parrafo);
       div.appendChild(contenido);

       //lo añadimos al contendor principal
       document.getElementById('reviewsSpace').prepend(div);


       document.getElementById('name').value = '';
       document.getElementById('review').value = '';
    }else{
        alert("Por favor, completa todos los campos.");
    }
}