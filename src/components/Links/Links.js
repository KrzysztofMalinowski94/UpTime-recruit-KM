import React from "react";

import PropTypes from "prop-types";

import "./Links.css";
import Link from "../Link/Link";

export const Links = () => {
  return (
    <ul
    className="links__container"
    >
      <li>
        <Link>What do we do?</Link>
      </li>
      <li>
        <Link>Our projects</Link>
      </li>
      <li>
        <Link>Testimonials</Link>
      </li>
      <li>
        <Link>Blog</Link>
      </li>
      <li>
        <Link>Support</Link>
      </li>
    </ul>
  );
};

Links.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Links;
