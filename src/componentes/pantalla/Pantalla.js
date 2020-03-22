import React from "react";

import "./Pantalla.css"

const Pantalla = ({ valor }) => {
  return <input data-testid="pantalla"
                aria-label="pantalla"
                type="number"
                className="pantalla"
                defaultValue={valor} />;
};

export default Pantalla;