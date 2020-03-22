import React from "react";

import Boton from "../boton/Boton"

const Controles = ({ limpiarFn, totalFn }) => {
  return (
    <>
    <Boton key="limpiar" texto="C" titulo="limpiar" onClick={limpiarFn} />
    <Boton key="total" texto="=" titulo="totalizar" onClick={totalFn} />
    </>
  );
};

export default Controles;