import React from "react";

import Boton from "../boton/Boton"

const operaciones = [
  ["+", (a, b) => a + b],
  ["-", (a, b) => a - b],
  ["*", (a, b) => a * b],
  ["/", (a, b) => a / b]
];

const obtenerFuncionParaOperacion = operacionSolicitada => {
  const resultado = operaciones.find(([operacion, _]) => operacion === operacionSolicitada);
  return resultado[1];
};

const Operaciones = ({ operacionPresionada }) => {
  const alUsarOperacion = operacionUsada => {
    const funcionAEjecutar = obtenerFuncionParaOperacion(operacionUsada);
    operacionPresionada(funcionAEjecutar);
  };

  return operaciones.map(([operacion, _]) =>
    <Boton
      key={operacion}
      texto={operacion}
      onClick={alUsarOperacion} />);
};

export default {
  Operaciones,
  obtenerFuncionParaOperacion
};