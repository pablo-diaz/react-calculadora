import React from 'react';
import { render } from '@testing-library/react';

import Calculadora from "./Calculadora";
import Utils from "../../utileria/utils";

test('cuando se inicie, la pantalla debe tener valor por defecto', () => {
    const { getByTestId } = render(<Calculadora />);
    const pantalla = getByTestId("pantalla");
    expect(pantalla.value).toBe("0");
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