

async () => {
    const db = require("./bd");
    console.log('Começou!');
    console.log('Select * from clientes');
    const clientes = await db.consultarClientes();
    console.log('clientes');
};