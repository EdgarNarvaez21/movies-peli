// Simula el estado de inicio de sesión (true = usuario autenticado, false = usuario no autenticado)
var loggedIn = false;

// Función para verificar si el usuario ha iniciado sesión
function checkLoginStatus() {
    if (!loggedIn) {
        // Si el usuario no ha iniciado sesión, redirigir al formulario de inicio de sesión
        window.location.href = 'login.html';
    } else {
        // Si el usuario ha iniciado sesión, mostrar el menú principal
        var menuDiv = document.getElementById('menu');
        menuDiv.innerHTML = `
            <p>Bienvenido al menú principal</p>
            <button onclick="logout()">Cerrar sesión</button>
        `;
    }
}

// Función para cerrar sesión
function logout() {
    loggedIn = false;
    // Redirigir de nuevo al formulario de inicio de sesión
    window.location.href = 'login.html';
}

// Verificar el estado de inicio de sesión cuando la página se carga
document.addEventListener('DOMContentLoaded', checkLoginStatus);


function playPause() {
    var iframes = document.querySelectorAll('.video-container iframe');
    iframes.forEach(function(iframe) {
        var video = iframe.contentWindow.document.querySelector('video');
        if (video) {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        }
    });
}

function navigateBack() {
    window.history.back();
}

function navigateForward() {
    window.history.forward();
}

function zoomIn() {
    var videoContainers = document.querySelectorAll('.video-container');
    videoContainers.forEach(function(container) {
        container.style.transform = "scale(1.2)";
        container.style.transition = "transform 0.3s ease";
    });
}

function zoomOut() {
    var videoContainers = document.querySelectorAll('.video-container');
    videoContainers.forEach(function(container) {
        container.style.transform = "scale(1)";
        container.style.transition = "transform 0.3s ease";
    });
}
