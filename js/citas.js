function grabar(){
    var boton = document.querySelector('#grabar')
    if(boton)
    {
        boton.addEventListener('click', nuevaClase,false);
    }
    mostrarClases()
}
function nuevaClase(){
    var clave= document.querySelector('#clave').value 
    var categoria = document.querySelector('#categoria').value 
    var referencia = document.querySelector('#referencia').value 
    var fecha = document.querySelector('#fecha').value 

    var valores = [categoria, referencia, fecha]

    localStorage.setItem(clave,valores)
    mostrarClases()

}

function mostrarClases(){
    var caja = document.querySelector('#mostrarDatos')
    
    caja.innerHTML = '<p><a href="#" <button id="borrar"  onclick = "borrarTodo()">Borrar Tareas</button></a></p>'

    for(var i=0; i<localStorage.length; i++){
        var id = localStorage.key(i)
        var valor = localStorage.getItem(id)
        caja.innerHTML += '<p>' +id+ ' - ' +valor+'</p>'
    }
}

window.addEventListener('load', grabar)

function borrarTodo(){
    localStorage.clear()
    location.reload()
    mostrarClases()
    alert('Tareas Borradas')
}