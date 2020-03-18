import React from "react";

import Boton from "./Boton"
import Utils from "./utils"

const Numeros = ({ digitoPresionado }) => {
  const botonPresionado = textoBoton => {
    digitoPresionado(parseInt(textoBoton));
  };

  return Utils.rango(0, 9).map(digito => <Boton key={digito} texto={digito} onClick={botonPresionado} />);
};

export default Numeros;