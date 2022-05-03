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
     className="sectionTitle"
     >
            <h3>{header}</h3>
     </Typography>
     <Typography
     className="content1"
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
