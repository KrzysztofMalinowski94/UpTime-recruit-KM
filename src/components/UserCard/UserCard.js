import React from "react";

import PropTypes from "prop-types";

import "./UserCard.css";
import Typography from "../Typography/Typography";

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
        <Typography
        className="h6"
        >
          <p>{`${user.name.first} ${user.name.last}`}</p>
        </Typography>
        <div>
          <Typography
          className="body2"
          >
            <p>Age: {user.dob.age}</p>
            <p>Email: {user.email}</p>
            <p>Tel. {user.cell}</p>
          </Typography>
        </div>
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
