/* hola */

const boton = document.getElementById('agregar');
const botonDeLimpiar = document.getElementById('limpiar');


let arreglo = []

addEventListener("DOMContentLoaded", (event) => {

    function actualizar(){

        let item = JSON.parse(localStorage.getItem('item'))
        contenedor.innerHTML = " ";
        for( const i of item) {
        const li = document.createElement("li");
        li.innerHTML = i;
        contenedor.appendChild(li);
        }
        }
        actualizar()
    

})

boton.addEventListener('click', function(){
    let item = document.getElementById('item').value;
    arreglo.push(item);
    localStorage.setItem("item", JSON.stringify(arreglo));

    document.getElementById('contenedor').innerHTML +=
    
    `
    <li>${item}</li> 
    
    `

    document.getElementById('item').value = ""
    
})

botonDeLimpiar.addEventListener('click', function() {
    arreglo = [];
    localStorage.clear();
    document.getElementById('contenedor').innerHTML =
    " "
    
})

