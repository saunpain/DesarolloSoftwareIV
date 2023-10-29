function alterPassword(checkbox) {
    const contraseñaInput = document.getElementById('contraseña');
    if (checkbox.checked) {
        contraseñaInput.type = 'text';
    } else {
        contraseñaInput.type = 'password';
    }
}

function signUp() {
    var usuarioInput = document.getElementById('usuario');
    var contraseñaInput = document.getElementById('contraseña');
    var cargadorPagina = document.getElementById('loader');
    var mensaje = document.getElementById('mensajeResultado');
    
    cargadorPagina.style.display = 'block';

    setTimeout(function () {
        cargadorPagina.style.display = 'none';
        var usuario = usuarioInput.value;
        var contraseña = contraseñaInput.value;

        if (usuario === 'usuario' && contraseña === 'contraseña') {
            mensaje.textContent = '¡Inicio de sesión exitoso!';
            mensaje.classList.remove('mensajeError');
            mensaje.classList.add('mensajeExitoso');
            usuarioInput.classList.add('exitoso');
            contraseñaInput.classList.add('exitoso');
            cargadorPagina.style.display = 'none';

            setTimeout(function() {
                alert('¡Bienvenido! Has ingresado exitosamente a nuestro sitio web. Por favor espera, la página se está cargando......');
            }, 100)
            
        } else {
            mensaje.textContent = 'Tu usuario o contraseña es incorrecta. Inténtalo nuevamente.';
            mensaje.classList.remove('mensajeExitoso');
            mensaje.classList.add('mensajeError');
            usuarioInput.classList.add('error');
            contraseñaInput.classList.add('error');
        }
    }, 2000);
}


function limpiarError(input) {
    input.classList.remove('error');
}

