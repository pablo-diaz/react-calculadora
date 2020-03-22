import React from "react";

const Pantalla = ({ valor }) => {
  return <input data-testid="pantalla" aria-label="pantalla" type="number" defaultValue={valor} />;
};

export default Pantalla;