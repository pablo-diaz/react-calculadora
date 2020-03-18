import React from "react";

import Boton from "./Boton"

const Operaciones = ({ botonPresionado }) => {
  return [
    ["+", (a,b)=>a+b],
    ["-", (a,b)=>a-b],
    ["*", (a,b)=>a*b],
    ["/", (a,b)=>a/b],
    ["=", null],
    ["C", null]
  ].map(([operacion, funcionAEjecutar]) =>
    <Boton
      key={operacion}
      texto={operacion}
      onClick={botonPresionado}
      operacion={funcionAEjecutar} />);
};

export default Operaciones;