import React from "react";
import Grid from '@material-ui/core/Grid';

import Boton from "../boton/Boton"

const Numeros = ({ digitoPresionado }) => {
  const botonPresionado = textoBoton => {
    digitoPresionado(parseInt(textoBoton));
  };

  return (
    <Grid container spacing={3}>
      { 
        [7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map(digito =>
          <Grid key={`numeros-grid-${digito}`} item xs={4}>
            <Boton key={digito}
                  texto={digito}
                  titulo={digito}
                  tipo="digito"
                  onClick={botonPresionado} />
          </Grid>
        )
      }
    </Grid>
  );
};

export default Numeros;