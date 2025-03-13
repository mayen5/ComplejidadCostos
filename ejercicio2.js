function analizarComplejidad(datos) {
    let variable = 0; // f(1)
    let listaResultados = aplicarProceso(datos); // f(n)
    let matriz = Array.from({ length: datos.length }, () => new Array(datos.length).fill(0)); // f(n²)

    if (listaResultados.length === 0) { // f(1)
        console.log("Error: No hay datos válidos");
        return null;
    }

    for (let elemento of listaResultados) { // f(n)
        let valor = transformar(elemento); // f(1)
        variable += 1; // f(1)

        if (valor > variable) { // f(1)
            console.log("Advertencia");
        } else {
            for (let i = 0; i < datos.length; i++) { // f(n)
                for (let j = 0; j < datos.length; j++) { // f(n)
                    matriz[i][j] = calcular(i, j); // f(1)
                }
            }
            ejecutarAccion(valor); // f(n)
        }
    }

    let resultado = buscarMaximo(listaResultados); // f(n)
    let variableAuxiliar = calcularRecursion(datos.length); // f(2ⁿ)
    return resultado; // f(1)
}

// Funciones auxiliares (simulan cálculos y procesos)
function aplicarProceso(datos) {
    return datos.map((x) => x * 2);
}

function transformar(valor) {
    return valor + 10;
}

function calcular(i, j) {
    return i + j;
}

function ejecutarAccion(valor) {
    console.log(`Ejecutando acción con ${valor}`);
}

function buscarMaximo(arr) {
    return Math.max(...arr);
}

// Recursión no optimizada (ejemplo de cálculo exponencial)
function calcularRecursion(n) {
    if (n <= 1) return 1;
    return calcularRecursion(n - 1) + calcularRecursion(n - 2);
}

// Ejemplo de uso
const datos = [1, 2, 3, 4, 5];
console.log(analizarComplejidad(datos));

const datos2 = [5, 6, 7, 8, 9];  // Asegura que los valores sean menores o iguales
console.log(analizarComplejidad(datos2));

const datos3 = [-10, -9, -8, -7, -6];  // Asegura valores pequeños
console.log(analizarComplejidad(datos3));

