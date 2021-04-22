function suscribir(evento) {
  evento.preventDefault();

  var nombre = document.querySelector("#email-subs").value;

  if (nombre !== "") {
    Swal.fire({
      title: "Gracias por suscribirte",
      text: "Te mantedremos al tanto de todas nuestras promociones",
      icon: "success",
      timer: 1000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  } else {
    Swal.fire({
      title: "Por favor ingresa tu email",
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  }
}

var boletin = document.querySelector("#subs");

boletin.addEventListener("submit", suscribir);

//------------------------------------------------------------------------------------

function añadir() {
  var box = document.querySelectorAll(".card-boton-carrito");
  var mostrar = document.querySelectorAll(".agregar-cantidad");

  box.forEach(function (element) {
    element.addEventListener("click", alerta);
    element.addEventListener("click", ocultar);
    element.addEventListener("click", prueba);
  });

  function alerta() {
    Swal.fire({
      title: "Producto agregado",
      icon: "success",
      timer: 1000,
      timerProgressBar: true,
      toast: true,
      position: "top-end",
      showConfirmButton: false,
    });
  }

  function ocultar() {
    this.classList.add("oculto");
  }

  function prueba() {
    mostrar.forEach(function (element) {
      element.classList.add("visible");
    });
  }
}

añadir();

//------------------------------------------------------------------------------------

document.querySelector(".menos").setAttribute("disabled", "disabled");

document.querySelector(".mas").addEventListener("click", sumar);

function sumar() {
  valueCount = document.querySelector("#myNumber").value;

  valueCount++;

  valueCount = document.querySelector("#myNumber").value = valueCount;

  if (valueCount !== 1) {
    document.querySelector(".menos").removeAttribute("disabled");
    document.querySelector(".menos").classList.remove("disabled");
  }
}

//-------------------------------------------------------------------------------

document.querySelector(".menos").addEventListener("click", restar);

function restar() {
  valueCount = document.querySelector("#myNumber").value;

  valueCount--;

  valueCount = document.querySelector("#myNumber").value = valueCount;

  if (valueCount === 0) {
    document.querySelector(".menos").setAttribute("disabled", "disabled");
  }
}

//570 px para mediaquery
