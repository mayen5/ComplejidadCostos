function analizarEficiencia(datos) {
    let variable = 5; // f(1)
    let listaResultados = aplicarProceso(datos); // f(n)
    
    if (listaResultados.length === 0) { // f(1)
        console.log("Error: No hay datos válidos"); // f(1)
        return null;
    }

    for (let elemento of listaResultados) { // f(n)
        let valor = transformar(elemento); // f(1)
        variable += 1; // f(1)

        if (valor >= variable + 5) { // f(1)
            console.log("Advertencia"); // f(1)
        } else {
            ejecutarAccion(valor); // f(n)
        }
    }

    return listaResultados; // f(1)
}

// Funciones de prueba (simulan procesos)
function aplicarProceso(datos) {
    return datos.map((x) => x * 2); // Simula algún procesamiento sobre los datos
}

function transformar(valor) {
    return valor + 10; // Simula transformación
}

function ejecutarAccion(valor) {
    console.log(`Ejecutando acción con ${valor}`); // Simula una acción
}

// Ejemplo de uso

const datos = [-5, -4, -3, -2, -1]; // Valores iniciales bajos
console.log(analizarEficiencia(datos));

const datos2 = [1, 2, 3, 4, 5];
console.log(analizarEficiencia(datos2));

const datos3 = [50, 60, 70, 80, 90];  // Asegura que los valores sean más grandes
console.log(analizarEficiencia(datos3));
