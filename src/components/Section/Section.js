import React from "react";

import PropTypes from "prop-types";

import UsersList from "../UsersList";

import "./Section.css";

export const Section = (props) => {
  const {
    data
  } = props;

  return (
    <section
    className="section"
    >
        <UsersList
        data={data}
        ></UsersList>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  data: PropTypes.array
};

export default Section;
