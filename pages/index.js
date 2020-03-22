import React from "react";
import Grid from '@material-ui/core/Grid';

import Calculadora from "../src/componentes/calculadora/Calculadora";

function index() {
    return (
      <Grid container>
        <Grid item xs={3} />
        <Grid item xs={3}>
          <Calculadora />
        </Grid>
        <Grid item xs={3} />
        <Grid item xs={3} />
      </Grid>
    ); 
  }
  
  export default index;