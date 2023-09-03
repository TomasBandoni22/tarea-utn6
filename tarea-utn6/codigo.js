function determinarMedioDeTransporte(distancia) {
    if (distancia >= 0 && distancia <= 1000) {
        return "pie";
    } else if (distancia > 1000 && distancia <= 10000) {
        return "bicicleta";
    } else if (distancia > 10000 && distancia <= 30000) {
        return "colectivo";
    } else if (distancia > 30000 && distancia <= 100000) {
        return "auto";
    } else {
        return "avion";
    }
}


var distancia = 15000;
var medioDeTransporte = determinarMedioDeTransporte(distancia);
console.log("El medio de transporte apropiado es: " + medioDeTransporte);