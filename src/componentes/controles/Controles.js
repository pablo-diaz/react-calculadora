import React from "react";

import Boton from "../boton/Boton"

const Controles = ({ limpiarFn, totalFn }) => {
  return (
    <>
    <Boton key="limpiar" texto="C" titulo="limpiar" tipo="control" onClick={limpiarFn} />
    <Boton key="total" texto="=" titulo="totalizar" tipo="control" onClick={totalFn} />
    </>
  );
};

export default Controles;