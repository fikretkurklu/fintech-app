import { InputGroup, FormControl } from "react-bootstrap";

import styles from "./CapitalSearchPage.module.css";

import DataTable from "../../components/DataTable/DataTable";

const CapitalSearchPage = (props) => {
  return (
    <>
      <h1 className={styles.title}>Search by Capital</h1>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
        <FormControl
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <DataTable countries={props.countries} />
    </>
  );
};

export default CapitalSearchPage;
