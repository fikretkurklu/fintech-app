import React, { useState, useEffect } from "react";
import DataTable from "../../components/DataTable/DataTable";

const HomePage = (props) => {
  useEffect(() => {
    console.log(props.countries);
  }, [props.countries]);

  return (
    <>
      <p>home page !</p>
      <DataTable />
    </>
  );
};

export default HomePage;
