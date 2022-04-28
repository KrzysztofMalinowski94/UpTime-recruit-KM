import React from "react";
import Button from "../Button/Button";

import PropTypes from "prop-types";

export const ButtonContainer = (props) => {
  return (
    <div
    className={"navBar__buttons"}
    >
        <Button
        className={"navBar__button--textual"}
        >
          Log In
        </Button>
        <Button
        className={"navBar__button--contained"}
        >
          Register
        </Button>
    </div>
  );
};

ButtonContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default ButtonContainer;
