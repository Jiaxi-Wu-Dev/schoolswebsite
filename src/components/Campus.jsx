import React from "react";
import { Link } from "react-router-dom";

const Campus = () => {
  return (
    <div>
      <h1>CAMPUS COMPONENT</h1>
      <h2> campus name </h2>
      <h2> campus image </h2>
      <Link to="/campuses">COME ON IN!</Link>
    </div>
  );
};

export default Campus;
