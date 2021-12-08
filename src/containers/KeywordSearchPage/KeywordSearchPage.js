import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import styles from "./KeywordSearchPage.module.css";

import DataTable from "../../components/DataTable/DataTable";
import SearchBar from "../../components/SearchBar/SearchBar";

const KeywordSearchPage = (props) => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(props.countries);
  }, [props.countries]);

  const handleSubmit = () => {
    let newCountries = props.countries.filter((elem) => {
      let isCapital = false;
      let isName = false;
      let isRegion = false;
      let isFlag = false;

      if (elem.capital) {
        isCapital = elem.capital.toLowerCase().includes(search.toLowerCase());
      }

      if (elem.name) {
        isName = elem.name.toLowerCase().includes(search.toLowerCase());
      }

      if (elem.region) {
        isRegion = elem.region.toLowerCase().includes(search.toLowerCase());
      }

      if (elem.flag) {
        let flagSplit = String(elem.flag.split(".")[1].split("/")[2]);
        isFlag = flagSplit.includes(search.toLowerCase());
      }

      return isCapital || isName || isRegion || isFlag;
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
        <h1 className={styles.title}>search by keyword</h1>
        <h4 className={styles.secondTitle}>
          write to the input the keyword and press enter or the button
        </h4>
        <SearchBar
          placeholder="search by keyword..."
          handleSubmit={handleSubmit}
          search={search}
          handleChange={handleChange}
        />
        <DataTable countries={countries} />
      </div>
    </>
  );
};

export default KeywordSearchPage;
