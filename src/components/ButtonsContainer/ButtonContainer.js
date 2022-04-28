import React from "react";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";

import PropTypes from "prop-types";

export const ButtonContainer = (props) => {
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
        onClick={console.log("HI")}
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
