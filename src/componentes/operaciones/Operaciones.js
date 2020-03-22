import React from "react";
import Grid from '@material-ui/core/Grid';

import Boton from "../boton/Boton"

const operaciones = [
  ["+", (a, b) => a + b, "suma"],
  ["-", (a, b) => a - b, "resta"],
  ["*", (a, b) => a * b, "multiplicacion"],
  ["/", (a, b) => a / b, "division"]
];

const obtenerFuncionParaOperacion = operacionSolicitada => {
  const resultado = operaciones.find(([operacion, _1, _2]) => operacion === operacionSolicitada);
  return resultado[1];
};

const obtenerTituloParaOperacion = operacionSolicitada => {
  const resultado = operaciones.find(([operacion, _1, _2]) => operacion === operacionSolicitada);
  return resultado[2];
};

const Operaciones = ({ operacionPresionada }) => {
  const alUsarOperacion = operacionUsada => {
    const funcionAEjecutar = obtenerFuncionParaOperacion(operacionUsada);
    operacionPresionada(funcionAEjecutar);
  };

  return (
    <Grid container spacing={3}>
      { operaciones.map(([operacion, _, textoBoton]) =>
          <Grid key={`operaciones-grid-${operacion}`} item xs={12}>
            <Boton
              key={textoBoton}
              texto={operacion}
              titulo={textoBoton}
              tipo="operacion"
              onClick={alUsarOperacion} />
          </Grid>
        )
      }
    </Grid>
  );
};

export default {
  Operaciones,
  obtenerFuncionParaOperacion,
  obtenerTituloParaOperacion
};