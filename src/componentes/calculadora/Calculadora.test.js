import React from 'react';
import { render } from '@testing-library/react';

import Utils from "../../utileria/utils";

import Calculadora from "./Calculadora";

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