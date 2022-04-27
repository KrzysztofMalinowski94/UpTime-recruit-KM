import React from "react";

import Button from "../Button";
import IntroContent from "../IntroContent/IntroContent";
import "./Intro.css";

export const Intro = () => {
  return (
    <>
      <div
      className="intro"
      >
        <div
        className="intro__content"
        >
            <IntroContent/>
            <div
            className="intro__buttonWrapper"
            >
              <Button
              className="contained"
              >
                Button with a label
              </Button>
              <Button
              className="outlined"
              >
                This button looks empty
              </Button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
