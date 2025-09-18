const listaAmigos = [];
const listaElement = document.getElementById("listaAmigos");
const resultadoElement = document.getElementById("resultado");
const input = document.getElementById("amigo");

// Agregar amigo al presionar Enter
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        agregarAmigo();
    }
});

// Función para agregar un amigo
function agregarAmigo() {
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    listaAmigos.push(nombre);
    mostrarLista();
    input.value = "";
}

// Mostrar la lista sin enumerar
function mostrarLista() {
    listaElement.innerHTML = "";
    listaAmigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}

// Elegir un solo amigo aleatoriamente
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay nombres en la lista.");
        return;
    }

    const elegido = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    mostrarResultado(elegido);
}

// Mostrar solo el nombre elegido
function mostrarResultado(nombre) {
    resultadoElement.innerHTML = "";
    const li = document.createElement("li");
    li.textContent = `🎉 El elegido es: ${nombre}`;
    resultadoElement.appendChild(li);
}
// Borrar todos los nombres ingresados
function borrarLista() {
    listaAmigos.length = 0;
    listaElement.innerHTML = "";
    resultadoElement.innerHTML = "";
    input.value = "";
}
