import React from "react";
import "./Button.css";
import Typography from "../Typography/Typography";

import PropTypes from "prop-types";

export const Button = (props) => {
  const {
    className,
    onclick,
    children
  } = props;

  return (
    <button
    className={className}
    onClick={onclick}
    >
    <Typography
    className="button"
    >
      {children}
    </Typography>
        </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  onclick: PropTypes.func,
  children: PropTypes.node
};

export default Button;
