import React from "react";

import Boton from "../boton/Boton"

const Controles = ({ limpiarFn, totalFn }) => {
  return (
    <>
    <Boton key="limpiar" texto="C" onClick={limpiarFn} />
    <Boton key="total" texto="=" onClick={totalFn} />
    </>
  );
};

export default Controles;