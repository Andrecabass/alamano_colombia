function salida() {
  Swal.fire({
    title: "Sesión finalizada",
    icon: "info",
    showConfirmButton: false,
  });

  setTimeout(salidas(), 600000);
}

function salidas() {
  window.location.href = "../index.html";
}

var mybtn = document.querySelector("#cerrar");

mybtn.addEventListener("click", salida);
