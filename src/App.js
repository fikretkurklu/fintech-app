import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import HomePage from "./containers/HomePage/HomePage";
import CapitalSearchPage from "./containers/CapitalSearchPage/CapitalSearchPage";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [isDataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      const countriesArray = res.data.map((cs) => ({
        name: cs.name,
        capital: cs.capital,
        region: cs.region,
        flag: cs.flags.png,
      }));
      setDataLoaded(true);
      setCountries(countriesArray);
    });
  }, []);

  return (
    <>
      {isDataLoaded ? (
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={<HomePage countries={countries} />}
            />
            <Route
              path="/search-capital"
              element={<CapitalSearchPage countries={countries} />}
            />
          </Routes>
        </Router>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default App;
