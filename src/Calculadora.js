import React from "react";

import Pantalla from "./Pantalla";
import Numeros from "./Numeros";
import Operaciones from "./Operaciones";
import Controles from "./Controles";

import ServicioCalculadora from "./ServicioCalculadora";

const Calculadora = ({ }) => {
  const servicio = ServicioCalculadora.servicio();

  return (
    <>
      <Pantalla valor={servicio.obtenerValorAMostrar()} />
      <Numeros digitoPresionado={servicio.alPresionarDigito} />
      <Operaciones operacionPresionada={servicio.alSolicitarOperacion} />
      <Controles limpiarFn={servicio.limpiar} totalFn={servicio.totalizar} />
    </>
  );
};

export default Calculadora;