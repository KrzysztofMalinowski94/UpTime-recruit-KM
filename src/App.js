import React from "react";

import Intro from "./components/Intro/Intro";
import NavBar from "./components/NavBar";
import Section from "./components/Section/Section";

const URL = "https://randomuser.me/api/?results=8";

export const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);
  const [data, setData] = React.useState(null);

  const fetchUsers = () => {
    setIsLoading(true);
    fetch(URL)
      .then((r) => r.json())
      .then((responseData) => setData(responseData.results))
      .catch((error) => setHasError(error))
      .finally(() => setIsLoading(false));
  };
  console.log("try1");
  React.useEffect(() => {
    fetchUsers();
    console.log("hello");
  }, []
  );

  return (
    <div>
      {
      hasError
        ? "ERROR OCCURED"
        : isLoading
          ? "LOADING..."
          : <>
          <NavBar/>
          <Intro/>
          <Section
          data={data}
          >
          </Section>
            </>

      }
    </div>
  );
};

export default App;
