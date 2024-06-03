// Función para manejar el registro de un nuevo usuario
function registrarNuevoUsuario(username, password) {
    // Aquí deberías implementar la lógica para guardar el nuevo usuario en la base de datos.
    // En este ejemplo, simplemente almacenamos los datos localmente.
    localStorage.setItem(username, password);
}

// Verificar el estado de inicio de sesión cuando la página se carga
document.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();
    document.getElementById('register-btn').addEventListener('click', function() {
        window.location.href = 'registro.html';
    });
});

// Escuchar el evento submit del formulario de inicio de sesión
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto

    // Obtener los valores del formulario
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Comprobar si el usuario y la contraseña están en la base de datos
    if (validarCredenciales(username, password)) {
        // Si las credenciales son válidas, redirigir al usuario al menú principal
        window.location.href = 'index.html';
    } else {
        // Si las credenciales son incorrectas, mostrar un mensaje de error
        alert('Usuario o contraseña incorrectos');
    }
});

// Función para validar las credenciales
function validarCredenciales(username, password) {
    // Supongamos que aquí deberíamos consultar la base de datos, pero en este ejemplo
    // simplemente comparamos con datos almacenados localmente.
    return localStorage.getItem(username) === password;
}

// Función para obtener usuarios de la base de datos local
function obtenerUsuarios() {
    // Aquí deberíamos implementar la lógica para obtener los usuarios de la base de datos,
    // pero en este ejemplo, simplemente devolvemos datos de prueba.
    return {
        "usuario1": "contraseña1",
        "usuario2": "contraseña2"
    };
}

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
