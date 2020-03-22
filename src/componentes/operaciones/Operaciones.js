import React from "react";

import Boton from "../boton/Boton"

const operaciones = [
  ["+", (a, b) => a + b, "suma"],
  ["-", (a, b) => a - b, "resta"],
  ["*", (a, b) => a * b, "multiplicacion"],
  ["/", (a, b) => a / b, "division"]
];

const obtenerFuncionParaOperacion = operacionSolicitada => {
  const resultado = operaciones.find(([operacion, _1, _2]) => operacion === operacionSolicitada);
  return resultado[1];
};

const Operaciones = ({ operacionPresionada }) => {
  const alUsarOperacion = operacionUsada => {
    const funcionAEjecutar = obtenerFuncionParaOperacion(operacionUsada);
    operacionPresionada(funcionAEjecutar);
  };

  return operaciones.map(([operacion, _, textoBoton]) =>
    <Boton
      key={textoBoton}
      texto={operacion}
      titulo={textoBoton}
      onClick={alUsarOperacion} />);
};

export default {
  Operaciones,
  obtenerFuncionParaOperacion
};