import React from "react";

import PropTypes from "prop-types";
import Typography from "../Typography/Typography";

import "./Loader.css";

export const Loader = () => {
  return (
    <div
    className="loaderContainer"
    >
      <div
      className="loader__spinner"
      >
      </div>
      <div
      className="loader__text"
      >
        <Typography
        className="sectionTitle"
        >
        <h3>Loading...</h3>
        </Typography>
      </div>
    </div>
  );
};

Loader.propTypes = {
  children: PropTypes.node,
  user: PropTypes.object
};

export default Loader;
