import React from "react";
import "./Button.css";
import Typography from "../Typography/Typography";

import PropTypes from "prop-types";

export const Button = (props) => {
  const {
    className,
    clickHandler,
    children
  } = props;

  return (
    <button
    className={className}
    onClick={clickHandler}
    >
      <Typography
      className="buttonStyle"
      >
        {children}
      </Typography>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  clickHandler: PropTypes.func,
  children: PropTypes.node
};

export default Button;
