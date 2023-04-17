import React from "react";
import { NavLink } from "react-router-dom";

function Dorpdown({items}) {
  return (
    <ul className="dropdown-menu">
      {items.map((item, index) => {
        return (
          <li key={index}>
            <NavLink aria-current="page" to={item.path}>
              {item.name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default Dorpdown;
