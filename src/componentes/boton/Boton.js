import React from "react";

const Boton = ({ texto, onClick, titulo }) => {
    const clickHandler = () => onClick(texto);
    return <button data-testid={`boton-${titulo}`} 
                   aria-label={`boton-${titulo}`}
                   onClick={clickHandler}>{texto}</button>;
};

export default Boton;