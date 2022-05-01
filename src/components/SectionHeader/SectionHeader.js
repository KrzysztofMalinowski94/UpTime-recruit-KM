import React from "react";

import PropTypes from "prop-types";
import Typography from "../Typography/Typography";

import "./SectionHeader.css";

export const SectionHeader = (props) => {
  const {
    children,
    header
  } = props;

  return (
    <div
    className="sectionHeader__container"
    >
     <Typography
     className="h3"
     >
            <p>{header}</p>
     </Typography>
     <Typography
     className="body1"
     >
       <p>{children}</p>
     </Typography>
    </div>
  );
};

SectionHeader.propTypes = {
  children: PropTypes.node,
  header: PropTypes.string
};

export default SectionHeader;
