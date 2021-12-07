import DataTable from "../../components/DataTable/DataTable";

import styles from "./HomePage.module.css";

const HomePage = (props) => {
  return (
    <>
      <h1 className={styles.title}>home page</h1>
      <DataTable countries={props.countries} />
    </>
  );
};

export default HomePage;
