// Usuario y contraseña aleatorios
const randomUsername = "usuario";
const randomPassword = "contraseña";

// Simula el estado de inicio de sesión (true = usuario autenticado, false = usuario no autenticado)
var loggedIn = false;

// Función para verificar si el usuario ha iniciado sesión
function checkLoginStatus() {
    if (!loggedIn && window.location.pathname !== '/login.html') {
        // Si el usuario no ha iniciado sesión y no está en la página de inicio de sesión, redirigir al formulario de inicio de sesión
        window.location.href = 'login.html';
    } else if (loggedIn && window.location.pathname === '/login.html') {
        // Si el usuario ha iniciado sesión y está en la página de inicio de sesión, redirigir al menú principal
        window.location.href = 'index.html';
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

// Escuchar el evento submit del formulario de inicio de sesión
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto

    // Obtener los valores del formulario
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Verificar si las credenciales son correctas
    if (username === randomUsername && password === randomPassword) {
        // Si las credenciales son correctas, establecer el estado de inicio de sesión a verdadero
        loggedIn = true;
        // Redirigir al menú principal
        window.location.href = 'index.html';
    } else {
        // Si las credenciales son incorrectas, mostrar un mensaje de error
        alert('Usuario o contraseña incorrectos');
    }
});


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
