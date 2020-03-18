import React from "react";

const Boton = ({ texto, onClick, operacion }) => {
    const clickHandler = () => onClick(texto, operacion);
    return <button onClick={clickHandler}>{texto}</button>;
};

export default Boton;