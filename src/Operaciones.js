import React from "react";

import Boton from "./Boton"

const Operaciones = ({ operacionPresionada }) => {
  const operaciones = [
    ["+", (a, b) => a + b],
    ["-", (a, b) => a - b],
    ["*", (a, b) => a * b],
    ["/", (a, b) => a / b]
  ];

  const alUsarOperacion = operacionUsada => {
    const [_, funcionAEjecutar] = operaciones
                             .find(([operacion, _]) => operacion === operacionUsada);
    operacionPresionada(operacionUsada, funcionAEjecutar);
  };

  return operaciones.map(([operacion, _]) =>
    <Boton
      key={operacion}
      texto={operacion}
      onClick={alUsarOperacion} />);
};

export default Operaciones;