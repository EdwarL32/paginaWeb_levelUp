import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
  
    const toggleNavbar = () => {
      setOpenLinks(!openLinks);
    };
    return (
      <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          <h1 className="Edwar">Edwar López</h1>
          <div className="hiddenLinks">
            <Link to="/"> Inicio </Link>
            <Link to="/menu">Proyectos </Link>
            <Link to="/contact"> Contactar </Link>
          </div>
        </div>
        <div className="rightSide">
          <Link to="/"> Inicio </Link>
          <Link to="/menu">Proyectos </Link>
          <Link to="/contact"> Contactar </Link>
          <button onClick={toggleNavbar}>
          </button>
        </div>
      </div>
    );
  }

  export default Navbar;

  