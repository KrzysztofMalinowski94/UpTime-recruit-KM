import React from "react";
import Typography from "../Typography/Typography";

export const IntroContent = () => {
  return (
    <>
      <Typography
      className="title">
      <h2>
      Hello fellow developer!
      </h2>
      </Typography>
      <Typography
      className={"content1"}
      >
      <p>
      Do as much as you can in a decent amount of time. Do not push it, 1-4 hours are totally okay. Just show us your skills. Sass/styled-components, BEM and React are preferred. But use anything you know, like or want.
      And most importantly - have fun!
      </p>
      </Typography>
    </>
  );
};

export default IntroContent;
