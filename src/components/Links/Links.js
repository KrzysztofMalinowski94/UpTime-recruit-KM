import React from "react";

import PropTypes from "prop-types";

export const Links = () => {
  return (
    <a href="">hello</a>
  );
};

Links.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Links;
