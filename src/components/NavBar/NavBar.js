import React from "react";

import Logo from "../Logo/Logo";
import Links from "../Links/Links";
import ButtonContainer from "../ButtonsContainer/ButtonContainer";

import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav
    className="navBar"
    >
      <Logo
      className={"logo"}
      ></Logo>
      <Links
      className="navBar__links"
      ></Links>
      <ButtonContainer
      className={"navBar__buttons"}
      />

    </nav>
  );
};

export default NavBar;
