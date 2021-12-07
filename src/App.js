import React, { useState, useEffect } from "react";
import axios from "axios";

import HomePage from "./containers/HomePage/HomePage";

const App = () => {
  const [countries, setCountries] = useState(null);

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
    <div className="primary">
      <HomePage countries={countries}></HomePage>
    </div>
  );
};

export default App;
