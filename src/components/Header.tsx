import { Container, Nav, Navbar } from "react-bootstrap";
import "../components/Header.css";

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src="img/PetFinderLogo.png" width="80" height="80"></img>
        </Navbar.Brand>
        <Nav className="mx-auto">
          <h1 className="text-center text-white">
            Help them find their fur-ever homes!
          </h1>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
