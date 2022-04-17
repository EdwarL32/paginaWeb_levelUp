import React from "react";
import BannerImage from "../assets/images/fondo.jpg";
import "../styles/home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> LevelUp Pool </h1>
        <p> Desarrollador React | Edwar López</p>
     
      </div>
    </div>
  );
}

export default Home;