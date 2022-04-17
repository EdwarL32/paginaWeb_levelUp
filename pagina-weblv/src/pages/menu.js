import React from "react";
import "../styles/menu.css";
import { MenuList } from "../list/menuList";
import MenuItem from "../components/menuItem";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Proyectos Personales</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              languaje={menuItem.languaje}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;