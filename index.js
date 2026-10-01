const db = require("./bd");

async function iniciar() {
    console.log("Começou!");

    console.log("Select * from clientes");

    const clientes = await db.consultarClientes();

    console.log(clientes);
}

iniciar();