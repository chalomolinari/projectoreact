import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoft from "../assets/logoft.png";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/category/Oferta">
          <img src={logoft} width={200} height={100} border-radius={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/category/Bebés">
              Bebés
            </Nav.Link>
            <Nav.Link as={NavLink} to="/category/Cuidado personal">
              Cuidado personal
            </Nav.Link>
            <Nav.Link as={NavLink} to="/category/Dermocosmética">
              Dermocosmética
            </Nav.Link>
            <Nav.Link as={NavLink} to="/category/Maquillaje">
              Maquillaje
            </Nav.Link>
            <Nav.Link as={NavLink} to="/category/Nosotros">
              Nosotros
            </Nav.Link>
            <Nav.Link as={NavLink} to="/category/Contacto">
              Contacto
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
