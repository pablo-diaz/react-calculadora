import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Calculadora from "./Calculadora";
import Utils from "../../utileria/utils";
import Ops from "../operaciones/Operaciones";

test('cuando se inicie, la pantalla debe tener valor por defecto', () => {
    const { getByTestId } = render(<Calculadora />);
    const pantalla = getByTestId("pantalla");
    expect(pantalla.defaultValue).toBe("0");
});

test('cuando se inicie, todos los numeros deben estar presentes', () => {
    const { getByTestId } = render(<Calculadora />);
    Utils.rango(0, 9)
        .map(digito => getByTestId(`boton-${digito}`))
        .forEach(boton => {
            expect(boton.value).not.toBeNull();
            expect(boton.value).toBeDefined();
        });
});

test('cuando se inicie, todas las operaciones deben estar presentes', () => {
    const { getByTestId } = render(<Calculadora />);
    ["suma", "resta", "multiplicacion", "division"]
        .map(operacion => getByTestId(`boton-${operacion}`))
        .forEach(boton => {
            expect(boton.value).not.toBeNull();
            expect(boton.value).toBeDefined();
        });
});

test('cuando se inicie, todos los controles deben estar presentes', () => {
    const { getByTestId } = render(<Calculadora />);
    ["limpiar", "totalizar"]
        .map(operacion => getByTestId(`boton-${operacion}`))
        .forEach(boton => {
            expect(boton.value).not.toBeNull();
            expect(boton.value).toBeDefined();
        });
});

test('al usar la operacion suma, funciona adecuadamente', () => {
    const { getByTestId } = render(<Calculadora />);
    const botonTotalizar = getByTestId("boton-totalizar");
    const pantalla = getByTestId("pantalla");

    operar(getByTestId, "12+8");
    fireEvent.click(botonTotalizar);

    expect(pantalla.defaultValue).toBe("20");
});

test('al enviar varias operaciones, funciona adecuadamente', () => {
    const { getByTestId } = render(<Calculadora />);
    const botonTotalizar = getByTestId("boton-totalizar");
    const pantalla = getByTestId("pantalla");

    operar(getByTestId, "12+8-20+60-10*2");
    fireEvent.click(botonTotalizar);

    expect(pantalla.defaultValue).toBe("100");
});

const operar = (getByTestIdFn, textoOperacion) => {
    for (let i = 0; i < textoOperacion.length; i++) {
        const simbolo = textoOperacion.charAt(i);
        if(Number.isInteger(parseInt(simbolo))) {
            const botonDigito = getByTestIdFn(`boton-${simbolo}`);
            fireEvent.click(botonDigito);
        }
        else {
            const tituloOperacion = Ops.obtenerTituloParaOperacion(simbolo);
            const botonDigito = getByTestIdFn(`boton-${tituloOperacion}`);
            fireEvent.click(botonDigito);
        }
    }
};