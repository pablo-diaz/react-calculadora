import React from "react";

import Pantalla from "../pantalla/Pantalla";
import Numeros from "../numeros/Numeros";
import Ops from "../operaciones/Operaciones";
import Controles from "../controles/Controles";

import ServicioCalculadora from "../../servicios/calculadora/ServicioCalculadora";

const Calculadora = ({ }) => {
  const servicio = ServicioCalculadora.servicio();

  return (
    <>
      <Pantalla valor={servicio.obtenerValorAMostrar()} />
      <Numeros digitoPresionado={servicio.alPresionarDigito} />
      <Ops.Operaciones operacionPresionada={servicio.alSolicitarOperacion} />
      <Controles limpiarFn={servicio.limpiar} totalFn={servicio.totalizar} />
    </>
  );
};

export default Calculadora;