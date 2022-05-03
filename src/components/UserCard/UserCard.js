import React from "react";

import PropTypes from "prop-types";

import "./UserCard.css";
import Typography from "../Typography/Typography";

export const UserCard = (props) => {
  const {
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
        className="userName"
        >
          <h6>{`${user.name.first} ${user.name.last}`}</h6>
        </Typography>
        <div>
          <Typography
          className="content2"
          >
            <p>Age: {user.dob.age}</p>
            <p>Email: {user.email}</p>
            <p>Tel. {user.cell}</p>
          </Typography>
        </div>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  children: PropTypes.node,
  user: PropTypes.object
};

export default UserCard;
