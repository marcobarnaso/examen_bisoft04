const nombre = document.querySelector("#txt-correo");
const ingredientes = document.querySelector("#txt-nombre");
const precio = document.querySelector("#txt-nacimiento");
const btnRegistro = document.querySelector("#btn-registrar");

let inputValidator = {
  "txt-correo": false,
  "txt-nombre": false,
  "txt-nacimiento": false,
};

const formularioRegistro = document.querySelectorAll("form");
const message = document.querySelector("span");
const message2 = document.querySelector("p")

formularioRegistro.forEach((e) => {
  e.addEventListener("input", () => {
    let nameAtt = event.target.getAttribute("name");
    if (event.target.value.length > 0) {
      inputValidator[nameAtt] = true;
    } else {
      inputValidator[nameAtt] = false;
    }
    let allTrue = Object.keys(inputValidator).every((item) => {
      return inputValidator[item] === true;
    });
    if (allTrue && precio.value > 0) {
      btnRegistro.disabled = false;
      message.style.visibility = "hidden";
      message2.style.visibility = "hidden";
    } else {
      btnRegistro.disabled = true;
      message.style.visibility = "visible";
      message2.style.visibility = "visible";
    }
  });
});

function getData() {
  let data = {
    nombre: nombre.value,
    ingredientes: ingredientes.value,
    precio: precio.value,
  };
  registrarDatos("platillo", data);
  document.querySelector("form").reset();
}

btnRegistro.addEventListener("click", getData);
