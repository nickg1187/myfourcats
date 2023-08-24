import { Container, Nav, Navbar } from "react-bootstrap";
import "../components/Header.css";

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src="img/cuatro.jpg" width="15%" height="15%"></img>
        </Navbar.Brand>
        <Nav className="mx-auto">
          <h1 className="text-center text-white">My Four Cats!</h1>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
