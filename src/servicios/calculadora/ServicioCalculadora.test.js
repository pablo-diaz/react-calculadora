import { renderHook, act } from '@testing-library/react-hooks';
import ServicioCalculadora from "./ServicioCalculadora"
import Ops from "../../componentes/operaciones/Operaciones";

test('al iniciar servicio, el valor a mostrar debe ser el por defecto', () => {
    const { result } = renderHook(() => ServicioCalculadora.servicio());
    let resultado = result.current.obtenerValorAMostrar();
    expect(resultado).toBe(0);
});

test('al agregar un digito, el valor a mostrar lo debe contener', () => {
    const { result } = renderHook(() => ServicioCalculadora.servicio());
    presionarDigito(result, 2);
    let resultado = result.current.obtenerValorAMostrar();
    expect(resultado).toBe(2);
});

test('al agregar otro digito a uno ya existente, el valor a mostrar ambos', () => {
    const { result } = renderHook(() => ServicioCalculadora.servicio());
    presionarDigito(result, 2);
    presionarDigito(result, 5);
    let resultado = result.current.obtenerValorAMostrar();
    expect(resultado).toBe(25);
});

test('al presionar varias veces cero al principio, no debe agregar varios ceros a lo que se muestra', () => {
    const { result } = renderHook(() => ServicioCalculadora.servicio());
    presionarDigito(result, 0);
    presionarDigito(result, 0);
    presionarDigito(result, 0);
    let resultado = result.current.obtenerValorAMostrar();
    expect(resultado).toBe(0);
});

test('al presionar cualquier operacion, no se debe desaparecer el valor anterior', () => {
    const { result } = renderHook(() => ServicioCalculadora.servicio());
    presionarDigito(result, 2);
    presionarDigito(result, 5);
    presionarOperacion(result);
    let resultado = result.current.obtenerValorAMostrar();
    expect(resultado).toBe(25);
});

test('al presionar cualquier operacion y continuar digitando, la nueva cifra debe ser mostrada', () => {
    const { result } = renderHook(() => ServicioCalculadora.servicio());
    presionarDigito(result, 2);
    presionarDigito(result, 5);
    presionarOperacion(result);
    presionarDigito(result, 1);
    presionarDigito(result, 2);
    presionarDigito(result, 3);
    presionarDigito(result, 4);
    let resultado = result.current.obtenerValorAMostrar();
    expect(resultado).toBe(1234);
});

test('al presionar totalizar, el resultado de la operacion resta debe ser mostrada', () => {
    const { result } = renderHook(() => ServicioCalculadora.servicio());

    presionarDigito(result, 2);
    presionarDigito(result, 5);

    presionarOperacion(result, (a , b) => a - b);

    presionarDigito(result, 1);
    presionarDigito(result, 2);

    presionarTotalizar(result);
    let resultado = result.current.obtenerValorAMostrar();
    expect(resultado).toBe(13);
});

test('al presionar limpiar, se debe mostrar el valor por defecto', () => {
    const { result } = renderHook(() => ServicioCalculadora.servicio());

    presionarDigito(result, 2);
    presionarDigito(result, 5);

    presionarOperacion(result, (a , b) => a - b);

    presionarDigito(result, 1);
    presionarDigito(result, 2);

    presionarTotalizar(result);

    presionarLimpiar(result);

    let resultado = result.current.obtenerValorAMostrar();
    expect(resultado).toBe(0);
});

test('al realizar operacion de suma, el resultado es calculado adecuadamente', () => {
    const { result } = renderHook(() => ServicioCalculadora.servicio());

    let textoOperacion = "12+8";
    operar(result, textoOperacion);
    
    let resultado = result.current.obtenerValorAMostrar();
    expect(resultado).toBe(20);
});

test('al realizar operacion de resta, el resultado es calculado adecuadamente', () => {
    const { result } = renderHook(() => ServicioCalculadora.servicio());

    let textoOperacion = "12-8";
    operar(result, textoOperacion);
    
    let resultado = result.current.obtenerValorAMostrar();
    expect(resultado).toBe(4);
});

test('al realizar operacion de multiplicacion, el resultado es calculado adecuadamente', () => {
    const { result } = renderHook(() => ServicioCalculadora.servicio());

    let textoOperacion = "12*2";
    operar(result, textoOperacion);
    
    let resultado = result.current.obtenerValorAMostrar();
    expect(resultado).toBe(24);
});

test('al realizar operacion de division, el resultado es calculado adecuadamente', () => {
    const { result } = renderHook(() => ServicioCalculadora.servicio());

    let textoOperacion = "12/2";
    operar(result, textoOperacion);
    
    let resultado = result.current.obtenerValorAMostrar();
    expect(resultado).toBe(6);
});

test('al realizar operacion larga, el resultado es calculado adecuadamente', () => {
    const { result } = renderHook(() => ServicioCalculadora.servicio());

    let textoOperacion = "100+20-50+30+10";
    operar(result, textoOperacion);
    
    let resultado = result.current.obtenerValorAMostrar();
    expect(resultado).toBe(110);
});

const presionarDigito = (result, digito) => {
    act(() => {
        result.current.alPresionarDigito(digito);
    });
};

const presionarOperacion = (result, laFuncion = (a,b) => a+b) => {
    act(() => {
        result.current.alSolicitarOperacion(laFuncion);
    });
};

const presionarTotalizar = result => {
    act(() => {
        result.current.totalizar();
    });
};

const presionarLimpiar = result => {
    act(() => {
        result.current.limpiar();
    });
};

const operar = (result, textoOperacion) => {
    for (let i = 0; i < textoOperacion.length; i++) {
        let simbolo = textoOperacion.charAt(i);
        let posibleDigito = parseInt(simbolo);
        if(Number.isInteger(posibleDigito))
            presionarDigito(result, posibleDigito);
        else {
            let laFuncion = Ops.obtenerFuncionParaOperacion(simbolo);
            if(laFuncion)
                presionarOperacion(result, laFuncion);
        }
    }

    presionarTotalizar(result);
};