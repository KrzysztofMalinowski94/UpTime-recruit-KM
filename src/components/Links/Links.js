/* eslint-disable no-unused-vars */
import React from "react";

import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./Links.css";
import Link from "../Link/Link";

export const Links = (props) => {
  const {
    isActive,
    setActive
  } = props;
  console.log(isActive);
  return (
    <ul
    className="links"
    >
       <li
       className="links__dropdown"
       onClick={setActive(!isActive)}>
         <FontAwesomeIcon icon={faBars}/>
       </li>
      <li className={`links__link ${isActive ? "links__link--active" : ""}`}>
        <Link>What do we do?</Link>
      </li>
      <li className={`links__link ${isActive ? "links__link--active" : ""}`}>
        <Link>Our projects</Link>
      </li>
      <li className={`links__link ${isActive ? "links__link--active" : ""}`}>
        <Link>Testimonials</Link>
      </li>
      <li className={`links__link ${isActive ? "links__link--active" : ""}`}>
        <Link>Blog</Link>
      </li>
      <li className={`links__link ${isActive ? "links__link--active" : ""}`}>
        <Link>Support</Link>
      </li>
    </ul>
  );
};

Links.propTypes = {
  isActive: PropTypes.bool,
  setActive: PropTypes.func
};

export default Links;
