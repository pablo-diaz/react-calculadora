import React from "react";
import Button from "@material-ui/core/Button";

const Boton = ({ texto, onClick, titulo, tipo }) => {
    const clickHandler = () => onClick(texto);

    const looksPorTipo = {
        operacion: { color: "primary", variant: "contained" },
        control: { color: "secondary", variant: "contained" },
        digito: { color: "primary", variant: "outlined" }
    };

    return <Button data-testid={`boton-${titulo}`} 
                   aria-label={`boton-${titulo}`}
                   color={looksPorTipo[tipo].color}
                   variant={looksPorTipo[tipo].variant}
                   onClick={clickHandler}>{texto}</Button>;
};

export default Boton;