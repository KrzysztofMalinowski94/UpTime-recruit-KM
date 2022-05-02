import React from "react";

import PropTypes from "prop-types";

import Logo from "../Logo/Logo";
import Links from "../Links/Links";
import ButtonContainer from "../ButtonsContainer/ButtonContainer";

import "./NavBar.css";

export const NavBar = (props) => {
  const {
    isActive,
    setActive
  } = props;
  console.log(isActive, typeof (isActive));
  return (
    <nav
    className="navBar"
    >
      <Links
      isActive={isActive}
      setActive={() => setActive}
      className="navBar__links"
      />
      <Logo
      className={"logo"}
      />
      <ButtonContainer/>
    </nav>
  );
};

NavBar.propTypes = {
  isActive: PropTypes.bool,
  setActive: PropTypes.func
};

export default NavBar;
