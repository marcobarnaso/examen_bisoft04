const tabla = document.querySelector(".tabla-bonita")
const tablaBody = document.querySelector("tbody")

async function populateTable(){
    const platillos = await obtenerDatos('platillo')
    platillos.forEach(platillo=>{
        tablaBody.innerHTML += `
        <tr>
        <td>${platillo.nombre}</td>
        <td>${platillo.ingredientes}</td>
        <td>${platillo.precio}</td>
        </tr>
        `
    })
}

populateTable()