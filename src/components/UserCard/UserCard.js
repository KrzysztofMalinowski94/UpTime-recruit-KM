import React from "react";

import PropTypes from "prop-types";

import "./UserCard.css";

export const UserCard = (props) => {
  const {
    children,
    user
  } = props;

  return (
    <div
    className="userCard">
      <div
      className="userCard__picture"
      style={{
        backgroundImage: `url(${user.picture.large})`
      }}
      >
      </div>
      <div
      className="userCard__info"
      >
        {user.name.first}
        <br></br>
        {children}
      </div>
    </div>
  );
};

UserCard.propTypes = {
  children: PropTypes.node,
  user: PropTypes.object
};

export default UserCard;
