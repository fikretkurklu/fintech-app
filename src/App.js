import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import Navi from "./components/Navi/Navi";
import HomePage from "./containers/HomePage/HomePage";
import CapitalSearchPage from "./containers/CapitalSearchPage/CapitalSearchPage";
import KeywordSearchPage from "./containers/KeywordSearchPage/KeywordSearchPage";

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      const countriesArray = res.data.map((cs) => ({
        name: cs.name,
        capital: cs.capital,
        region: cs.region,
        flag: cs.flags.png,
      }));
      setCountries(countriesArray);
    });
  }, []);

  return (
    <>
      <Router>
        <Navi />
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage title="Home" countries={countries} />}
          />
          <Route
            path="/search-capital"
            element={
              <CapitalSearchPage
                title="Search by capital"
                countries={countries}
              />
            }
          />
          <Route
            path="/search-keyword"
            element={
              <KeywordSearchPage
                title="Search by keyword"
                countries={countries}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
