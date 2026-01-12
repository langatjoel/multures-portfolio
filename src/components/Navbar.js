import { Container, Navbar, Offcanvas, Nav } from 'react-bootstrap';
import './Navbar.css';
import logoImg from '../assets/logo.png'; 

const MyNavbar = () => {
  return (
    <Navbar expand={false} className="custom-navbar fixed-top">
      <Container fluid className="px-4">
        <Navbar.Brand href="#home" className="brand-logo-container">
          <img src={logoImg} alt="Multures Logo" className="logo-img" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="offcanvasNavbar" className="custom-toggler" />

        <Navbar.Offcanvas id="offcanvasNavbar" placement="end" className="custom-menu">
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title className="text-white">MENU</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-grow-1 pe-3">
              {/* Ensure these hrefs match the IDs in your components */}
              <Nav.Link href="#home" className="menu-item">Home</Nav.Link>
              <Nav.Link href="#about" className="menu-item">About Us</Nav.Link>
              <Nav.Link href="#mission" className="menu-item">Our Mission</Nav.Link>
              <Nav.Link href="#services" className="menu-item">Products & Services</Nav.Link>
              <Nav.Link href="#contact" className="menu-item">Talk To Us</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;