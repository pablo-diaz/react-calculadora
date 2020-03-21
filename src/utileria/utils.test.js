import Utils from "./utils";

test('rango correcto devuelve array de numeros en rango', () => {
    let resultado = Utils.rango(1, 5);

    expect(resultado).not.toBeNull();
    expect(resultado).toBeDefined();
});

test('rango correcto devuelve array con numeros solicitados', () => {
    let resultado = Utils.rango(1, 5);

    expect(resultado.length).toBe(5);
    expect(resultado).toContain(1);
    expect(resultado).toContain(2);
    expect(resultado).toContain(3);
    expect(resultado).toContain(4);
    expect(resultado).toContain(5);
});

test('rango correcto devuelve array con numeros en orden', () => {
    let resultado = Utils.rango(1, 5);

    expect(resultado[0]).toBe(1);
    expect(resultado[1]).toBe(2);
    expect(resultado[2]).toBe(3);
    expect(resultado[3]).toBe(4);
    expect(resultado[4]).toBe(5);
});

test('rango incorrecto devuelve array vacio', () => {
    let resultado = Utils.rango(2, 1);

    expect(resultado).not.toBeNull();
    expect(resultado).toBeDefined();
    expect(resultado.length).toBe(0);
});
