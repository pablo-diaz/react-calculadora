import React from "react";

import Boton from "../boton/Boton"
import Utils from "../../utileria/utils"

const Numeros = ({ digitoPresionado }) => {
  const botonPresionado = textoBoton => {
    digitoPresionado(parseInt(textoBoton));
  };

  return Utils.rango(0, 9).map(digito => <Boton key={digito} texto={digito} titulo={digito} tipo="digito" onClick={botonPresionado} />);
};

export default Numeros;