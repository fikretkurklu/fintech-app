import { InputGroup, FormControl, Button } from "react-bootstrap";

const SearchBar = (props) => {
  return (
    <InputGroup
      className="mb-3"
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          props.handleSubmit();
        }
      }}
    >
      <FormControl
        placeholder={props.placeholder}
        aria-label={props.placeholder}
        aria-describedby="basic-addon2"
        value={props.search}
        onChange={(e) => props.handleChange(e.target.value)}
      />
      <Button
        variant="outline-secondary"
        id="button-addon2"
        onClick={props.handleSubmit}
      >
        Search
      </Button>
    </InputGroup>
  );
};

export default SearchBar;
