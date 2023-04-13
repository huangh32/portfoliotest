import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import classes from "./Toggle.module.css";
import { Fragment } from "react";

const Toggle = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={classes.togglegroup}>
            <Nav.Link href="#features" className={classes.navlink}>
              Experience
            </Nav.Link>
            <Nav.Link href="#projects" className={classes.navlink}>
              Projects
            </Nav.Link>
            <Nav.Link href="#interests" className={classes.navlink}>
              Interests
            </Nav.Link>
            <Nav.Link href="#contact" className={classes.navlink}>
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Toggle;
