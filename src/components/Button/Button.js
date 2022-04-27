import React from "react";
import "./Button.css";
import Typography from "../Typography/Typography";

import PropTypes from "prop-types";

export const Button = (props) => {
  const {
    className,
    children
  } = props;

  return (
    <button
    className={className}
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
  children: PropTypes.node
};

export default Button;
