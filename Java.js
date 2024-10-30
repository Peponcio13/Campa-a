function mostrarMensaje() {
    alert("No seas parte del silencio. Abre los ojos, haz oír tu voz.");
}

// Efecto de escritura en el encabezado principal
document.addEventListener("DOMContentLoaded", function() {
    const text = "Campaña Contra el Bullying";
    let index = 0;
    const typingSpeed = 100;

    function typeWriter() {
        if (index < text.length) {
            document.querySelector("header h1").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, typingSpeed);
        }
    }
    typeWriter();
});

// Función para mostrar el mensaje motivador con animación
function mostrarMensaje() {
    const mensaje = "No seas parte del silencio. Abre los ojos, haz oír tu voz.";
    const mensajeContainer = document.createElement("div");
    mensajeContainer.classList.add("mensaje-popup");
    mensajeContainer.innerText = mensaje;
    document.body.appendChild(mensajeContainer);

    // Remover el mensaje después de unos segundos
    setTimeout(() => {
        mensajeContainer.classList.add("fade-out");
        setTimeout(() => mensajeContainer.remove(), 1000); // Tiempo para la animación de desvanecimiento
    }, 3000);
}

// Cambiar el color de fondo del botón al hacer clic
document.querySelector("button").addEventListener("click", function() {
    this.style.backgroundColor = "#1abc9c";
    setTimeout(() => this.style.backgroundColor = "#2980b9", 200); // Vuelve al color original
});






//-----------------

// 1. Animación de entrada del logo
document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo");
    logo.style.opacity = 0;
    logo.style.transform = "translateY(-20px)";
    
    setTimeout(() => {
        logo.style.transition = "opacity 1s ease, transform 1s ease";
        logo.style.opacity = 1;
        logo.style.transform = "translateY(0)";
    }, 300); // Tiempo de espera para iniciar la animación
});

// 2. Mostrar una frase inspiradora aleatoria
const frasesInspiradoras = [
    "Sé el cambio que quieres ver en el mundo.",
    "La empatía es el primer paso hacia un mundo mejor.",
    "Nunca subestimes el poder de tu voz.",
    "La valentía es el primer paso hacia la justicia.",
    "Apoya, escucha, y sé un amigo.",
    "Todos tenemos derecho a ser escuchados y respetados."
];

function mostrarFraseAleatoria() {
    const fraseContainer = document.getElementById("frase-inspiradora");
    const fraseAleatoria = frasesInspiradoras[Math.floor(Math.random() * frasesInspiradoras.length)];
    fraseContainer.innerText = fraseAleatoria;
}

// Cargar una frase al azar al inicio
document.addEventListener("DOMContentLoaded", mostrarFraseAleatoria);

// 3. Cambiar tema claro/oscuro
function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    const themeButton = document.getElementById("theme-button");
    if (document.body.classList.contains("dark-theme")) {
        themeButton.innerText = "Cambiar a Tema Claro";
    } else {
        themeButton.innerText = "Cambiar a Tema Oscuro";
    }
}
