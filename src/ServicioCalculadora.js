import React from "react";

import Estado from "./Estado";

const servicio = () => {
  const [estado, setEstado] = React.useState(Estado.obtenerEstadoInicial());
  const [enTransicion, setEnTransicion] = React.useState(false);
  const [reiniciar, setReiniciar] = React.useState(false);
  const [funcionDeCalculo, setFuncionDeCalculo] = React.useState({ laFuncion: null });

  const obtenerValorAMostrar = () => estado.mostrar;

  const alPresionarDigito = digito => {
    setEstado(Estado.obtenerEstadoAlAgregarDigito(estado, digito, enTransicion, reiniciar));
    setEnTransicion(false);
    setReiniciar(false);
  };

  const limpiar = () => {
    setEstado(Estado.obtenerEstadoInicial());
    setFuncionDeCalculo({ laFuncion: null });
    setEnTransicion(false);
    setReiniciar(false);
  };

  const calcularTotal = () => {
    if(funcionDeCalculo.laFuncion)
        setEstado(Estado.obtenerEstadoParaResultadoOperacion(estado, funcionDeCalculo.laFuncion));
    setFuncionDeCalculo({ laFuncion: null });
  };

  const alSolicitarOperacion = funcionAEjecutar => {
    calcularTotal();
    setFuncionDeCalculo({ laFuncion: funcionAEjecutar });
    setEnTransicion(true);
    setReiniciar(false);
  };

  const totalizar = () => {
    calcularTotal();
    setEnTransicion(true);
    setReiniciar(true);
  };

  return {
      alPresionarDigito,
      alSolicitarOperacion,
      limpiar,
      totalizar,
      obtenerValorAMostrar
  };
};

export default {
    servicio
}