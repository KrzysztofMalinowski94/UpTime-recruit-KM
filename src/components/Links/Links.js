import React from "react";

import PropTypes from "prop-types";

import "./Links.css";
import Link from "../Link/Link";

export const Links = () => {
  return (
    <div
    className="links__container"
    >
      <Link>What do we do?</Link>
      <Link>Our projects</Link>
      <Link>Testimonials</Link>
      <Link>Blog</Link>
      <Link>Support</Link>
    </div>
  );
};

Links.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Links;
