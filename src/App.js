import React, { useEffect } from "react";

import Intro from "./components/Intro/Intro";
import NavBar from "./components/NavBar";
import Section from "./components/Section/Section";

const URL = "https://randomuser.me/api/?results=8";

export const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);
  const [data, setData] = React.useState(null);

  const fetchData = async () => {
    try {
      const result = await fetch(URL);
      const data = await result.json();
      setData(data);
    } catch (error) {
      setHasError();
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(
    fetchData(),
    []
  );

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

export default App;
