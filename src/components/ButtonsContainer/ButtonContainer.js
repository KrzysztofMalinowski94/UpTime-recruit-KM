import React from "react";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";

import PropTypes from "prop-types";

export const ButtonContainer = () => {
  return (
    <div
    className={"navBar__buttons"}
    >
      <Typography
      className = "button"
      >
        <Button
        className={"navBar__button--textual"}
        >
          Log In
        </Button>
      </Typography>

      <Typography
      className="button"
      >
        <Button
        className={"navBar__button--contained"}
        >
          Register
        </Button>
      </Typography>
    </div>
  );
};

ButtonContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default ButtonContainer;
