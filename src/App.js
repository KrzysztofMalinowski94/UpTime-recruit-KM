import React from "react";

import Intro from "./components/Intro/Intro";
import NavBar from "./components/NavBar";
import Section from "./components/Section/Section";
import Loader from "./components/Loader";

const fetchNumber = 8;
const URL = `https://randomuser.me/api?results=${fetchNumber}`;

export const App = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const [data, setData] = React.useState([]);

  const fetchUsers = React.useCallback(() => {
    setIsLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then((responseData) => setData((data) => [...data, ...responseData.results]))
      .catch((error) => setHasError(error))
      .finally(() => setIsLoading(false)
      );
  });

  React.useEffect(() => {
    fetchUsers();
  }, []
  );

  return (
    <div>
      <NavBar/>
      <Intro/>
      {
      hasError
        ? "ERROR OCCURRED"
        : isLoading
          ? <Loader/>
          : <>
          <Section
          data={data}
          onclick={fetchUsers}
          >
          </Section>
            </>

      }
    </div>
  );
};

export default App;
