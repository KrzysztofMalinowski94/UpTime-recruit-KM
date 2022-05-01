import React from "react";

import PropTypes from "prop-types";

import UsersList from "../UsersList";
import SectionHeader from "../SectionHeader";

import "./Section.css";

export const Section = (props) => {
  const {
    data,
    onclick
  } = props;

  return (
    <section
    className="section"
    >
      <SectionHeader
      header="Open API show off"
      >
        It’s up to you what you display down there and how you style it.  Use fetch/axios (preffered) or if you’re already tired of this task - get the data from a JSON object. Lazy loading is optional but highly appreciated.
        List of APIs you could use: https://github.com/public-apis/public-apis
      </SectionHeader>
        <UsersList
        data={data}
        onclick={onclick}
        ></UsersList>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  data: PropTypes.array,
  onclick: PropTypes.func
};

export default Section;
