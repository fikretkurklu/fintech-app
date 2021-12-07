import { Table, Image } from "react-bootstrap";

const DataTable = (props) => {
  let tableData = props.countries.map((elem) => {
    return (
      <tr key={elem.name}>
        <td>{elem.name}</td>
        <td>{elem.capital}</td>
        <td>{elem.region}</td>
        <td>
          <Image src={elem.flag} rounded />
        </td>
      </tr>
    );
  });

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>name</th>
            <th>capital</th>
            <th>region</th>
            <th>flag</th>
          </tr>
        </thead>
        <tbody>{tableData}</tbody>
      </Table>
    </>
  );
};

export default DataTable;
