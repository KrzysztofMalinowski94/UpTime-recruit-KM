import React from "react";

import Intro from "./components/Intro/Intro";
import NavBar from "./components/NavBar";
import Section from "./components/Section/Section";

export class App extends React.Component {
  state = {
    isLoading: true,
    hasError: false,
    data: null
  };

  // const withAsyncAwait = async () => {
  //   const response = await fetch("https://randomuser.me/api/");
  //   const finalRespose = await response.json();
  //   console.log(finalRespose);
  async componentDidMount () {
    try {
      const result = await fetch("https://randomuser.me/api/?results=8");
      const data = await result.json();
      this.setState(() => ({
        data,
        isLoading: true
      }));
    } catch (error) {
      this.setState(() => ({
        hasError: true,
        isLoading: false
      }));
    } finally {
      this.setState(({ isLoading: false }));
    }
  }

  render () {
    const {
      isLoading,
      hasError,
      data
    } = this.state;

    return (
    <div>
      {
      hasError
        ? "ERROR OCCURED"
        : isLoading
          ? "LOADING..."
          : <>
          <Intro/>
            <NavBar/>
            <Section>
          <ul>
            {data.results.map((element) => {
              return (<li key={element.email}>{element.email}</li>);
            })}
          </ul>
            </Section>
            </>

      }
    </div>
    );
  };
}

export default App;
