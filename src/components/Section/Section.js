import React from "react";
import Typography from "../Typography/Typography";

import PropTypes from "prop-types";

import "./Section.css";

export const Section = (props) => {
  const {
    children
  } = props;
  return (
    <section
    className="section"
    >
        <Typography
        className="h3"
        >
          <header>HERE GOES DATA</header>
          {children}
        </Typography>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node
};

export default Section;
