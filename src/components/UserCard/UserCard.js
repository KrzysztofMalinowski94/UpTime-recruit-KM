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
        <p>{`${user.name.first} ${user.name.last}`}</p>
        <p>Age: {user.dob.age}</p>
        <p>Email: {user.email}</p>
        <p>Tel. {user.cell}</p>
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
