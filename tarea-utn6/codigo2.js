function encontrarNumeroMayor(arrayDeNumeros) {
    if (arrayDeNumeros.length === 0) {
        // Manejar el caso de un array vacío
        return undefined; // O podrías lanzar un error o devolver un valor predeterminado
    }

    let numeroMayor = arrayDeNumeros[0]; // Inicializamos con el primer número del array

    for (let i = 1; i < arrayDeNumeros.length; i++) {
        if (arrayDeNumeros[i] > numeroMayor) {
            numeroMayor = arrayDeNumeros[i];
        }
    }

    return numeroMayor;
}

// Ejemplo de uso:
const numeros = [15, 3, 27, 8, 42, 10];
const mayor = encontrarNumeroMayor(numeros);
console.log("El número mayor es: " + mayor);