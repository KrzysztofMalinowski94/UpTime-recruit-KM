import React from "react";

import Intro from "./components/Intro/Intro";
import NavBar from "./components/NavBar";
import Section from "./components/Section/Section";

export const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);
  const [data, setData] = React.useState(null);
  // const [fetchNumber, setFetchNumber] = React.useState(8);
  const fetchNumber = 8;
  const URL = `https://randomuser.me/api/?results=${fetchNumber}`;

  // const loadMoreData = setFetchNumber(fetchNumber + 8);

  const fetchUsers = () => {
    setIsLoading(true);
    fetch(URL)
      .then((r) => r.json())
      .then((responseData) => setData(responseData.results))
      .catch((error) => setHasError(error))
      .finally(() => setIsLoading(false));
  };

  React.useEffect(() => {
    fetchUsers();
  }, []
  );

  // React.useEffect(() => {
  //   fetchUsers();
  // }, [fetchNumber]);

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
          // onclick={loadMoreData}
          >
          </Section>
            </>

      }
    </div>
  );
};

export default App;
