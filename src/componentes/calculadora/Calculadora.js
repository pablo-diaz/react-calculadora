import React from "react";
import Grid from '@material-ui/core/Grid';

import Pantalla from "../pantalla/Pantalla";
import Numeros from "../numeros/Numeros";
import Ops from "../operaciones/Operaciones";
import Controles from "../controles/Controles";

import ServicioCalculadora from "../../servicios/calculadora/ServicioCalculadora";

const Calculadora = ({ }) => {
  const servicio = ServicioCalculadora.servicio();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Pantalla valor={servicio.obtenerValorAMostrar()} />
      </Grid>
      <Grid item xs={6}>
        <Numeros digitoPresionado={servicio.alPresionarDigito} />
      </Grid>
      <Grid item xs={6}>
        <Ops.Operaciones operacionPresionada={servicio.alSolicitarOperacion} />
      </Grid>
      <Grid item xs={12}>
        <Controles limpiarFn={servicio.limpiar} totalFn={servicio.totalizar} />
      </Grid>
    </Grid>
  );
};

export default Calculadora;