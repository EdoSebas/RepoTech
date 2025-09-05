// 1. Obtenemos una referencia a los elementos del HTML donde mostraremos los resultados.
const reporteClientesDiv = document.getElementById('reporte-clientes');
const totalAcreedoresH3 = document.getElementById('total-acreedores');

// 2. Inicializamos la variable que acumulará el total de los saldos acreedores.
let totalAcreedores = 0;

// 3. Usamos un bucle infinito que controlaremos desde adentro.
while (true) {
    // Pedimos el número de cuenta.
    const numeroCuenta = parseInt(prompt('Ingrese su número de cuenta (o un número negativo para terminar):'));

    // Si el usuario ingresa un número negativo, salimos del bucle.
    if (numeroCuenta < 0) {
        break;
    }

    // Pedimos el resto de los datos para el cliente actual.
    const nombreCliente = prompt('Ingrese su nombre:');
    const saldoActual = parseFloat(prompt('Ingrese su saldo actual:'));

    // 4. Determinamos el estado de la cuenta.
    let estadoCuenta = '';
    if (saldoActual > 0) {
        estadoCuenta = 'Acreedor';
        // Acumulamos el saldo solo si es acreedor.
        totalAcreedores += saldoActual;
    } else if (saldoActual === 0) {
        estadoCuenta = 'Nulo';
    } else {
        estadoCuenta = 'Deudor';
    }

    // 5. Creamos el bloque de HTML para el cliente actual.
    // Usar `<div>` para cada cliente ayuda a mantener la estructura.
    const clienteHtml = `
        <div>
            <p><strong>Número de cuenta:</strong> ${numeroCuenta}</p>
            <p><strong>Cuenta habiente:</strong> ${nombreCliente}</p>
            <p><strong>Saldo de cuenta:</strong> ${saldoActual.toFixed(2)}</p>
            <p><strong>Estado:</strong> ${estadoCuenta}</p>
            <hr>
        </div>
    `;

    // 6. Añadimos el HTML del nuevo cliente al contenedor.
    // El operador `+=` es clave: añade el contenido nuevo sin borrar el anterior.
    reporteClientesDiv.innerHTML += clienteHtml;
}

// 7. Al finalizar el bucle, mostramos el resumen en su propio contenedor.
totalAcreedoresH3.innerHTML = `Suma total de saldos acreedores: ${totalAcreedores.toFixed(2)} pesos`;