import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <InputGroup className="mb-3">
          <FormControl
            aria-describedby="basic-addon1"
            value={searchValue}
            onChange={handleSearchInputChanges}
            type="text"
          />
          <InputGroup.Prepend>
            <Button
              variant="outline-primary"
              onClick={callSearchFunction}
              type="submit"
              value="SEARCH"
            >
              Search
            </Button>
          </InputGroup.Prepend>
        </InputGroup>
      </Row>
    </Container>
  );
};

export default Search;
