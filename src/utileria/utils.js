const rango = (desde, hasta) => {
    var resultado = [];
    for (let i = desde; i <= hasta; i++) {
        resultado.push(i);
    }
    return resultado;
}

export default {
    rango
};