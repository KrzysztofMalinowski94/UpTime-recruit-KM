import React from "react";

import Button from "../Button";
import IntroContent from "../IntroContent/IntroContent";
import "./Intro.css";

export const Intro = () => {
  return (
    <>
      <div
      className="intro intro__bg"
      >
      </div>
        <div
        className="intro__content"
        >
            <IntroContent/>
            <div
            className="intro__buttonWrapper"
            >
              <Button>IM WITH LABEL</Button>
              <Button>IM EMPTY</Button>
            </div>
        </div>
    </>
  );
};

export default Intro;
