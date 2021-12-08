import { LinkContainer } from "react-router-bootstrap";

import { Nav, Navbar, Container } from "react-bootstrap";

const Navi = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Fintech App</Navbar.Brand>
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/search-capital">
              <Nav.Link>Search by capital</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/search-keyword">
              <Nav.Link>Search by keyword</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navi;
