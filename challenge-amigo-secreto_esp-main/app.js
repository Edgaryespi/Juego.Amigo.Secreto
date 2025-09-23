let listaDeAmigos = [];
let limiteDeLista = 5;

function agregarAmigo() {
    let nombreAgregado = document.getElementById('amigo').value;

    if (nombreAgregado == '') {
        alert("Por favor, ingrese un nombre válido");
    } else if (listaDeAmigos.length < limiteDeLista) {
        listaDeAmigos.push(nombreAgregado);
    }

    mostrarAmigos();
    limpiarCaja();
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaDeAmigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("No tenemos nombres para el sorteo");
        return;
    }

    let sorteo = Math.floor(Math.random() * listaDeAmigos.length);
    let elegido = listaDeAmigos[sorteo];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "<li>El amigo secreto es: " + elegido + "</li>";
    

    setTimeout(reiniciarJuego, 5000);
    }

   

function reiniciarJuego() {
   
    limpiarCaja();

    listaDeAmigos = [];

    document.getElementById("listaAmigos").innerHTML = "";

    document.getElementById("resultado").innerHTML = "";
}


