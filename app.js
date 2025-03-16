// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

//variables
const inputAmigo = document.getElementById("amix");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

//funciones
function agregarAmigo() {
    if(!inputAmigo.value){
        alert("Es necesario ingresar un nombre");
        return;
    }
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML = ulListaAmigos.innerHTML + `<li>${inputAmigo.value}</li>`;
    limpiarCaja();
}

function sortearAmigo(){
        const aleatorio = Math.floor((Math.random()* listaAmigos.length));
        const amigoSecreto = listaAmigos[aleatorio];
        ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
        limpiarLista();
    
}

function limpiarCaja(){
    document.querySelector("#amix").value = "";
}

function limpiarLista() {
    ulListaAmigos.innerHTML = "";
    listaAmigos.length = 0;
    
}