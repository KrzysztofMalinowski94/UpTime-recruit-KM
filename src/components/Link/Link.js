import React from "react";

import PropTypes from "prop-types";

import "./Link.css";
import Typography from "../Typography/Typography";

export const Link = (props) => {
  const {
    children
  } = props;
  return (
    <Typography
    className={"subtitle"}
    >
      <a
      href="#"
      target={"_blank"}
      className="link" rel="noreferrer"
      >{children}</a>
    </Typography>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Link;
