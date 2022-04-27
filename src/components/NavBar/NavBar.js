import React from "react";

import Logo from "../Logo/Logo";
import Button from "../Button";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav
    className="navBar"
    >
      <Logo
      className={"logo"}
      ></Logo>
      <div
      className="navBar__buttons"
      >
        <Button>NAV</Button>
        <Button>NAV</Button>
      </div>

    </nav>
  );
};

export default NavBar;
