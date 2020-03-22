import React from 'react';
import { render } from '@testing-library/react';

import Calculadora from "./Calculadora";

test('cuando se inicie, la pantalla debe tener valor por defecto', () => {
    const { getByTestId } = render(<Calculadora />);
    const pantalla = getByTestId("pantalla");
    expect(pantalla.value).toBe("0");
});