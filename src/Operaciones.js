import React from "react";

import Boton from "./Boton"

const Operaciones = ({ botonPresionado }) => {
  return ["+", "-", "*", "/", "=", "C"].map(operacion => <Boton key={operacion} texto={operacion} onClick={botonPresionado} />);
};

export default Operaciones;