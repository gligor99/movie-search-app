import React from "react";
import { Navbar } from "react-bootstrap";

const Header = (props) => {
  return (
    <>
      <Navbar bg="light">
        <Navbar.Brand>{props.text}</Navbar.Brand>
      </Navbar>
      <br />
    </>
  );
};

export default Header;