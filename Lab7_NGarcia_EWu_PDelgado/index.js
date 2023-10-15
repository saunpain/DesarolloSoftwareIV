function cambiarColor(){
    let colorcito = "#" + Math.floor(Math.random()*16777215).toString(16);
    let texto = document.getElementById("textoColor")
    texto.style.color = colorcito
}

function masTexto(){
    let parrafo = document.getElementById("masTexto")
    parrafo.textContent += "mas texto "
}

function concatenarTexto(){
    let texto1 = document.getElementById("texto1").value
    let texto2 = document.getElementById("texto2").value
    let resultado = document.getElementById("resultado")
    resultado.textContent = texto1 + " " + texto2
}

function eliminarValorLista(){
    let listaDesplegable = document.getElementById("listaDesplegable");
    let valorAEliminar = listaDesplegable.value;
    let opcionAEliminar = listaDesplegable.querySelector('option[value="' + valorAEliminar + '"]');

    listaDesplegable.removeChild(opcionAEliminar);
}

function video(){
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}

function mensaje(){
    let nombre = document.getElementById("texto1").value + " " + document.getElementById("texto2").value

    alert("Hola " + nombre + "!")
}

function consola(){
    console.log(document.getElementById("texto1").value + " " + document.getElementById("texto2").value)
}

function checkCaja(){
    let texto = document.getElementById("labelCheck")
    let cajaCheck = document.getElementById("cajaCheck")

    if(cajaCheck.checked){
        texto.textContent = "Presionado"
    }
    else{
        texto.textContent = "Sin presionar"
    }
}

function checkRadio(){
    let texto = document.getElementById("labelRadio")
    let radioCheck = document.getElementById("radioCheck")

    if(radioCheck.checked){
        texto.textContent = "Presionado"
    }
    else{
        texto.textContent = "Sin presionar"
    }
}

function validarCampo(){
    let campo = document.getElementById("campo").value;
    let mensajeValidado = document.getElementById("mensajeValidado");

    // Utiliza una expresión regular para verificar si el valor contiene solo letras
    if (/^[A-Z ]+$/i.test(campo)) {
        mensajeValidado.textContent = "Tiene solo letras";
    } else {
        mensajeValidado.textContent = "Solo se permiten letras.";
    }

    /*
     if(!input.checkValidity()) {
        mensajeValidado.textContent = "Tiene solo letras";
    } 
    else {
        mensajeValidado.textContent = "Solo se permiten letras.";
    }
    */ 
}

function mapearDatos(anime){
    let contenedor = document.getElementById("contenedor")

    contenedor.innerHTML = mapearPlantilla(anime)
}

function mapearPlantilla(a){
    return `<tr>
    <td class="columna1" id="imagen"><img src="${a.images.jpg.image_url}" alt=""></td>
    <td class="columna2">${a.title}</td>
    <td class="columna3">${a.synopsis}</td>
</tr>`
}

function recargarDatos(){
    let animeId = document.getElementById("animeId").value
    fetch("https://api.jikan.moe/v4/anime/"+animeId).then(respuesta=>{
        if(respuesta.ok){
            respuesta.json().then(anime=>{
                console.log(anime)
                mapearDatos(anime.data);
            })
        }
        else{
            alert("No ha habido una respuesta exitosa")
        }
    })
}