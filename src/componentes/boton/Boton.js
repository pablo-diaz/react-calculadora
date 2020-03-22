import React from "react";

const Boton = ({ texto, onClick }) => {
    const clickHandler = () => onClick(texto);
    return <button data-testid={`boton-${texto}`} 
                   aria-label={`boton-${texto}`}
                   onClick={clickHandler}>{texto}</button>;
};

export default Boton;