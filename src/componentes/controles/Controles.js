import React from "react";
import Grid from '@material-ui/core/Grid';

import Boton from "../boton/Boton"

const Controles = ({ limpiarFn, totalFn }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Boton key="total" texto="=" titulo="totalizar" tipo="control" onClick={totalFn} />
      </Grid>
      <Grid item xs={6}>
        <Boton key="limpiar" texto="C" titulo="limpiar" tipo="control" onClick={limpiarFn} />
      </Grid>
    </Grid>
  );
};

export default Controles;