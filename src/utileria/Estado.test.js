import Estado from "./Estado";

test('al llamar obtenerEstadoInicial debe retornar una estructura valida', () => {
    let resultado = Estado.obtenerEstadoInicial();
    expect(resultado).toMatchObject({ mostrar: 0, total: 0 });
});

test('al agregar digito a estado vacio se debe retornar el digito agregado, sin sobreescribir y sin reiniciar', () => {
    let estadoInicial = { mostrar: 0, total: 0};
    let nuevoEstado = Estado.obtenerEstadoAlAgregarDigito(estadoInicial, 2, false, false);
    expect(nuevoEstado).toMatchObject({ mostrar: 2, total: 0 });
});

test('al agregar cero a estado vacio se debe retornar el cero nuevamente, sin sobreescribir y sin reiniciar', () => {
    let estadoInicial = { mostrar: 0, total: 0};
    let nuevoEstado = Estado.obtenerEstadoAlAgregarDigito(estadoInicial, 0, false, false);
    expect(nuevoEstado).toMatchObject({ mostrar: 0, total: 0 });
});

test('al agregar digito a estado iniciado se debe retornar el digito agregado, sin sobreescribir y sin reiniciar', () => {
    let estadoInicial = { mostrar: 53, total: 0};
    let nuevoEstado = Estado.obtenerEstadoAlAgregarDigito(estadoInicial, 2, false, false);
    expect(nuevoEstado).toMatchObject({ mostrar: 532, total: 0 });
});

test('al agregar digito a estado iniciado se debe retornar el digito agregado y el total adecuado, sobreescribiendo y sin reiniciar', () => {
    let estadoInicial = { mostrar: 53, total: 0};
    let nuevoEstado = Estado.obtenerEstadoAlAgregarDigito(estadoInicial, 2, true, false);
    expect(nuevoEstado).toMatchObject({ mostrar: 2, total: 53 });
});

test('al agregar digito a estado iniciado se debe retornar el digito agregado y el total adecuado, sin sobreescribir y reiniciando', () => {
    let estadoInicial = { mostrar: 53, total: 447};
    let nuevoEstado = Estado.obtenerEstadoAlAgregarDigito(estadoInicial, 2, false, true);
    expect(nuevoEstado).toMatchObject({ mostrar: 2, total: 0 });
});

test('al agregar digito a estado iniciado este estado inicial no se debe modificar, sin sobreescribir y sin reiniciar', () => {
    let estadoInicial = { mostrar: 53, total: 1254};
    Estado.obtenerEstadoAlAgregarDigito(estadoInicial, 2, false, false);
    expect(estadoInicial).toMatchObject({ mostrar: 53, total: 1254 });
});

test('al agregar digito a estado iniciado este estado inicial no se debe modificar, sin sobreescribir y reiniciando', () => {
    let estadoInicial = { mostrar: 53, total: 1254};
    Estado.obtenerEstadoAlAgregarDigito(estadoInicial, 2, false, true);
    expect(estadoInicial).toMatchObject({ mostrar: 53, total: 1254 });
});

test('al agregar digito a estado iniciado este estado inicial no se debe modificar, sobreescribiendo y sin reiniciar', () => {
    let estadoInicial = { mostrar: 53, total: 1254};
    Estado.obtenerEstadoAlAgregarDigito(estadoInicial, 2, true, false);
    expect(estadoInicial).toMatchObject({ mostrar: 53, total: 1254 });
});

test('al agregar digito a estado iniciado este estado inicial no se debe modificar, sobreescribiendo y reiniciando', () => {
    let estadoInicial = { mostrar: 53, total: 1254};
    Estado.obtenerEstadoAlAgregarDigito(estadoInicial, 2, true, true);
    expect(estadoInicial).toMatchObject({ mostrar: 53, total: 1254 });
});

test('al usar la funcion suma, el estado inicial debe ser transformado de acuerdo a la funcion solicitada', () => {
    let estadoInicial = { mostrar: 53, total: 17};
    let nuevoEstado = Estado.obtenerEstadoParaResultadoOperacion(estadoInicial, (a, b) => a + b);
    expect(nuevoEstado).toMatchObject({ mostrar: 70, total: 70 });
});

test('al usar la funcion resta, el estado inicial debe ser transformado de acuerdo a la funcion solicitada, con el orden de parametros adecuado', () => {
    let estadoInicial = { mostrar: 3, total: 20};
    let nuevoEstado = Estado.obtenerEstadoParaResultadoOperacion(estadoInicial, (a, b) => a - b);
    expect(nuevoEstado).toMatchObject({ mostrar: 17, total: 17 });
});

test('al usar cualquier funcion sobre el estado inicial, este no se debe modificar', () => {
    let estadoInicial = { mostrar: 53, total: 17};
    Estado.obtenerEstadoParaResultadoOperacion(estadoInicial, (a, b) => a + b);
    expect(estadoInicial).toMatchObject({ mostrar: 53, total: 17 });
});