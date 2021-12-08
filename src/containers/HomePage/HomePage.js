import { Helmet } from "react-helmet";

import DataTable from "../../components/DataTable/DataTable";

import styles from "./HomePage.module.css";

const HomePage = (props) => {
  return (
    <>
      <Helmet>
        <title>{props.title} - UBFsoft</title>
      </Helmet>
      <div className={styles.page}>
        <h1 className={styles.title}>home page</h1>
        <DataTable countries={props.countries} />
      </div>
    </>
  );
};

export default HomePage;
