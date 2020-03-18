import React from "react";

import Pantalla from "./Pantalla"
import Numeros from "./Numeros"
import Operaciones from "./Operaciones"

import Estado from "./Estado"

const Calculadora = ({ }) => {
  const [estado, setEstado] = React.useState(Estado.obtenerEstadoInicial());
  const [operacionEnCurso, setOperacionEnCurso] = React.useState("");
  const [enTransicion, setEnTransicion] = React.useState(false);
  const [reiniciar, setReiniciar] = React.useState(false);

  const digitoPresionado = otroDigito => {
    setEstado(Estado.obtenerEstadoAlAgregarDigito(estado, otroDigito, enTransicion, reiniciar));
    setEnTransicion(false);
    setReiniciar(false);
  };

  const limpiarPantalla = () => {
    setEstado(Estado.obtenerEstadoInicial());
    setOperacionEnCurso("");
    setEnTransicion(false);
    setReiniciar(false);
  };

  const calcularTotal = () => {
    switch(operacionEnCurso) {
      case "+": setEstado(Estado.obtenerEstadoParaResultadoOperacion(estado, (a,b) => a + b)); break;
      case "-": setEstado(Estado.obtenerEstadoParaResultadoOperacion(estado, (a,b) => a - b)); break;
      case "*": setEstado(Estado.obtenerEstadoParaResultadoOperacion(estado, (a,b) => a * b)); break;
      case "/": setEstado(Estado.obtenerEstadoParaResultadoOperacion(estado, (a,b) => a / b)); break;
      default: console.log(operacionEnCurso);
    }
  };

  const operacionSolicitada = operacion => {
    calcularTotal();
    setOperacionEnCurso(operacion);
    setEnTransicion(true);
    setReiniciar(operacion === "=");
  };

  const operacionPresionada = operacion => {
    switch(operacion) {
      case "C": limpiarPantalla(); break;
      case "=": operacionSolicitada(operacion); break;
      case "+": operacionSolicitada(operacion); break;
      case "-": operacionSolicitada(operacion); break;
      case "*": operacionSolicitada(operacion); break;
      case "/": operacionSolicitada(operacion); break;
      default: console.log(operacion);
    }
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