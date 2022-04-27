import React from "react";

import Intro from "./components/Intro/Intro";
import NavBar from "./components/NavBar";
import Button from "./components/Button";

export class App extends React.Component {
  state = {
    isLoading: false,
    hasError: false,
    data: null
  };

  getData = async () => {
    await fetch();
  };

  render () {
    return (
    <div>
      <NavBar></NavBar>
      <Intro></Intro>
      <Button
      className = "intro__button"
      >
          IM DUMB
      </Button>
    </div>
    );
  };
}

export default App;
