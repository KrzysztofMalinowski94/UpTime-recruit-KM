import React from "react";

import PropTypes from "prop-types";

import "./UsersList.css";
import UserCard from "../UserCard";
import Button from "../Button";

export const UsersList = (props) => {
  const {
    data,
    onclick
  } = props;

  return (
    <>
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
      <Button
      className="section__button intro__button--outlined"
      onclick = {onclick}
      >
        Load more...
      </Button>
    </>
  );
};

UsersList.propTypes = {
  children: PropTypes.node,
  data: PropTypes.array,
  onclick: PropTypes.func
};

export default UsersList;
