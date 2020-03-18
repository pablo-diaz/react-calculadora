import React from "react";

import Pantalla from "./Pantalla"
import Numeros from "./Numeros"
import Operaciones from "./Operaciones"

import Estado from "./Estado"

const Calculadora = ({ }) => {
  const [estado, setEstado] = React.useState(Estado.obtenerEstadoInicial());
  const [enTransicion, setEnTransicion] = React.useState(false);
  const [reiniciar, setReiniciar] = React.useState(false);
  const [funcionDeCalculo, setFuncionDeCalculo] = React.useState({ laFuncion: null });

  const digitoPresionado = otroDigito => {
    setEstado(Estado.obtenerEstadoAlAgregarDigito(estado, otroDigito, enTransicion, reiniciar));
    setEnTransicion(false);
    setReiniciar(false);
  };

  const limpiarPantalla = () => {
    setEstado(Estado.obtenerEstadoInicial());
    setFuncionDeCalculo({ laFuncion: null });
    setEnTransicion(false);
    setReiniciar(false);
  };

  const calcularTotal = () => {
    if(funcionDeCalculo.laFuncion)
      setEstado(Estado.obtenerEstadoParaResultadoOperacion(estado, funcionDeCalculo.laFuncion));
  };

  const operacionSolicitada = (operacion, funcionAEjecutar) => {
    calcularTotal();
    setFuncionDeCalculo({ laFuncion: funcionAEjecutar });
    setEnTransicion(true);
    setReiniciar(operacion === "=");
  };

  const operacionPresionada = (operacion, funcionAEjecutar) => {
    if(operacion === "C") limpiarPantalla();
    else operacionSolicitada(operacion, funcionAEjecutar);
  };

  return (
    <>
      <Pantalla valor={estado.mostrar} />
      <Numeros digitoPresionado={digitoPresionado} />
      <Operaciones botonPresionado={operacionPresionada} />
    </>
  );
};

export default Calculadora;