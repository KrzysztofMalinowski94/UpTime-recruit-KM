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
        <Button
        className={"navBar__button--textual"}
        >Log In</Button>
        <Button
        className={"navBar__button--contained"}
        >Register</Button>
      </div>

    </nav>
  );
};

export default NavBar;
