import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import styles from "./CapitalSearchPage.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";

import DataTable from "../../components/DataTable/DataTable";

const CapitalSearchPage = (props) => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(props.countries);
  }, [props.countries]);

  const handleSubmit = (e) => {
    let newCountries = props.countries.filter((elem) => {
      return elem.capital
        ? elem.capital.toLowerCase().includes(search.toLowerCase())
        : false;
    });
    setCountries(newCountries);
  };

  const handleChange = (value) => {
    setSearch(value);
  };

  return (
    <>
      <Helmet>
        <title>{props.title} - UBFsoft</title>
      </Helmet>
      <div className={styles.page}>
        <h1 className={styles.title}>search by capital</h1>
        <h4 className={styles.secondTitle}>
          write to the input the capital name and press enter or the button
        </h4>
        <SearchBar
          placeholder="search by capital..."
          handleSubmit={handleSubmit}
          search={search}
          handleChange={handleChange}
        />
        <DataTable countries={countries} />
      </div>
    </>
  );
};

export default CapitalSearchPage;
