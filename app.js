//! Variables
const formulario = document.querySelector(".formulario");
const msg = document.querySelector(".mensaje");
const datosCuenta = {};

//! Funciones
function obtenerValores(event) {
  event.preventDefault();

  const cuenta = document.querySelector("#cuenta").value.trim();
  const tipoCuenta = document.querySelector("#tipo-cuenta").value;
  const password = document.querySelector("#password").value.trim();
  
  const alertaExistente = document.querySelector(".alerta");
  if (alertaExistente) {
    alertaExistente.remove();
  }

  if (cuenta === "" || password === "" || tipoCuenta === "") {
    mostrarAlerta("Todos los campos son obligatorios");
    return;
  }
  datosCuenta.cuenta = cuenta;
  datosCuenta.tipoCuenta = tipoCuenta;
  datosCuenta.password = password;
  console.log("Datos Ingresados", datosCuenta);
}

function mostrarAlerta(mensaje) {
  // alert(mensaje);

  const alerta = document.createElement("p");
  alerta.textContent = mensaje;
  alerta.classList.add("alerta");
  msg.appendChild(alerta);
}

//! Eventos
formulario.addEventListener("submit", obtenerValores);
