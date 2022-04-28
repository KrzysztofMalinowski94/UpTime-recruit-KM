import React from "react";

import PropTypes from "prop-types";

import "./UsersList.css";
import UserCard from "../UserCard";
import Button from "../Button";

export const UsersList = (props) => {
  const {
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
      <Button
      className="intro__button--outlined"
      onClick = {() => { console.log("hi"); }}
      >
        Load more...
      </Button>
    </div>
  );
};

UsersList.propTypes = {
  children: PropTypes.node,
  data: PropTypes.array
};

export default UsersList;
