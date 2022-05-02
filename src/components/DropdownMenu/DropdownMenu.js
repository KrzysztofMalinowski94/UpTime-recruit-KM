import React from "react";

import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Links from "../Links/Links";

import "./DropdownMenu.css";

export const DropdownMenu = (props) => {
  const {
    isActive,
    setIsActive
  } = props;

  console.log(isActive);
  return (
    <div
    >
    <div
      className={"dropMenu "}
    onClick = {() => setIsActive(!isActive)}
    >
      <FontAwesomeIcon icon={faBars}/>
    </div>
    <div
    >
      <Links
      className={`${isActive ? "links__container--isActive" : ""}`}
      />
    </div>
    </div>
  );
};

DropdownMenu.propTypes = {
  isActive: PropTypes.bool,
  setIsActive: PropTypes.func
};

export default DropdownMenu;
