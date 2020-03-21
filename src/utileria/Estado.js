const obtenerEstadoInicial = () => {
    return {
        mostrar: 0,
        total: 0
    };
};

const obtenerEstadoAlAgregarDigito = (estadoActual, digito, sobreescribir, reiniciar) => {
    return {
        mostrar: sobreescribir || reiniciar ? digito : digito + (estadoActual.mostrar * 10),
        total: reiniciar ? 0 : sobreescribir ? estadoActual.mostrar : estadoActual.total
    };
};

const obtenerEstadoParaResultadoOperacion = (estadoActual, operacionFn) => {
    const resultado = operacionFn(estadoActual.total, estadoActual.mostrar);
    return {
        mostrar: resultado,
        total: resultado
    };
};

export default {
    obtenerEstadoInicial,
    obtenerEstadoAlAgregarDigito,
    obtenerEstadoParaResultadoOperacion
}