import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header: React.FC = () => {
  return (
    <div>
      <Navbar bg="light" variant="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="./Parcel">My Parcel app</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
