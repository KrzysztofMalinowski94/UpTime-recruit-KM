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
      href="https://www.youtube.com/watch?v=DLzxrzFCyOs"
      target={"_blank"}
      className="link--colors" rel="noreferrer"
      >{children}</a>
    </Typography>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Link;
