function login(evento) {
  evento.preventDefault();

  var nombre = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;
  var user = "admin@alamano.com.co";
  var pass = "admin";

  if (nombre === user && password === pass) {
    setTimeout(cambiarPagina(), 60000);
  } else {
    Swal.fire({
      title: "Usuario o contraseña incorrecto",
      icon: "error",
    });
  }

  function cambiarPagina() {
    window.location.href = "usuario/user-login.html";
  }
}

var miform = document.querySelector("#form-login");

miform.addEventListener("submit", login);

function recordar() {
  Swal.fire({
    title: "Ingresa tu correo electronico",
    icon: "info",
    input: "email",
    confirmButtonText: "restablecer",
  });
}

var password = document.querySelector("#recordarPass");

password.addEventListener("click", recordar);
