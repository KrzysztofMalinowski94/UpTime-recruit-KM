import React from "react";

import PropTypes from "prop-types";

import "./UsersList.css";
import UserCard from "../UserCard";

export const UsersList = (props) => {
  const {
    // eslint-disable-next-line no-unused-vars
    data
  } = props;

  return (
    <div
    className="usersList__container"
    >
      {data.map((user, index) => {
        return <UserCard
        key={index}
        user= {data[index]}
        >
        </UserCard>;
      })}
    </div>
  );
};

UsersList.propTypes = {
  children: PropTypes.node,
  data: PropTypes.array
};

export default UsersList;
