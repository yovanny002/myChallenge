let nombres = [];

function adicionarNombre() {
    const nombreInput = document.getElementById('nombreInput');
    const nombre = nombreInput.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    nombres.push(nombre);
    nombreInput.value = "";

    const lista = document.getElementById('listaNombres');
    const li = document.createElement('li');
    li.textContent = nombre;
    lista.appendChild(li);
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("Por favor, agrega al menos un nombre para el sorteo.");
        return;
    }

    const amigoSecreto = nombres[Math.floor(Math.random() * nombres.length)];
    const resultado = document.getElementById('resultado');
    resultado.textContent = `El amigo secreto es: ${amigoSecreto}`;
}
