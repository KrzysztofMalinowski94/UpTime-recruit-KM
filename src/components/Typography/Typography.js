import React from "react";

import PropTypes from "prop-types";
import "./Typography.css";

export const Typography = (props) => {
  const {
    className,
    children
  } = props;
  return (
        <span
        className={className}
        >
          {children}
        </span>
  );
};

Typography.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Typography;
