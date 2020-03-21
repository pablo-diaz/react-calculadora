import React from "react";

const Boton = ({ texto, onClick }) => {
    const clickHandler = () => onClick(texto);
    return <button onClick={clickHandler}>{texto}</button>;
};

export default Boton;