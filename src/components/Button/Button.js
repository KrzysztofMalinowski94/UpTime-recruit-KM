import React from "react";
import "./Button.css";

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
            {children}
        </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Button;
