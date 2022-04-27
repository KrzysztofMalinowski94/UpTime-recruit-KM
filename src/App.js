import React from "react";

import Intro from "./components/Intro/Intro";
import NavBar from "./components/NavBar";
import Section from "./components/Section/Section";

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
      <Section></Section>
    </div>
    );
  };
}

export default App;
