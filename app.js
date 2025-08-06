// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema
// Aquí guardaremos los nombres de los amigos
let listaAmigos = [];

// Esta función se llama cuando haces clic en el botón "Añadir"
function agregarAmigo() {
    // Tomamos lo que escribió el usuario
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Quitamos espacios extra

    // Si el campo está vacío, mostramos un mensaje
    if (nombre === "") {
        alert("Por favor, ingrsa un nombre.");
        return; // Salimos de la función
    }

    // Guardamos el nombre en la lista
    listaAmigos.push(nombre);

    // Mostramos todos los nombres en pantalla
    mostrarLista();

    // Borramos lo que había en el campo de texto
    input.value = "";
    input.focus();
}

// Esta función muestra todos los amigos en una lista en la página
function mostrarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // Limpiamos la lista antes de volver a escribirla

    // Para cada nombre en la lista...
    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement("li"); // Creamos un nuevo elemento de lista
        li.textContent = listaAmigos[i]; // Le ponemos el nombre
        ul.appendChild(li); // Lo agregamos a la lista en la página
    }
}

// Esta función se llama cuando haces clic en "Sortear amigo"
function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiamos el resultado anterior

    // Si no hay nombres, mostramos un mensaje
    if (listaAmigos.length === 0) {
        alert("Primero debes agregar al menos un nombre.");
        return;
    }

    // Elegimos un número al azar entre 0 y el tamaño de la lista
    let indice = Math.floor(Math.random() * listaAmigos.length);
    let amigo = listaAmigos[indice]; // Elegimos ese nombre

    // Mostramos quién fue el amigo secreto sorteado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "<li> El amigo secreto es: <strong>" + amigoSecreto + "</strong> </li>";
}

