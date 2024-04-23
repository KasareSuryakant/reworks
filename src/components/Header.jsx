import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import BrandLogo from '../assets/images/Header/Logo.svg';
import './Header.css';

export default function Header() {
  const [activeLink, setActiveLink] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (navItem) => {
    setActiveLink(navItem);
  };

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      className={`custom-navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/home" className="me-auto nav-logo">
          <Image src={BrandLogo} alt="Drone Shop ID" width="30" height="30" className="d-inline-block align-top" />
          {' DroneShopID'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-toggle" onClick={handleToggle} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" text="Home" activeLink={activeLink} handleNavClick={handleNavClick} />
            <NavLink to="/products" text="Products" activeLink={activeLink} handleNavClick={handleNavClick} />
            <NavLink to="/gallery" text="Gallery" activeLink={activeLink} handleNavClick={handleNavClick} />
            <NavLink to="/login" text="Sign In" activeLink={activeLink} handleNavClick={handleNavClick} />
            <NavLink to="/register" text="Register" activeLink={activeLink} handleNavClick={handleNavClick} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function NavLink({ to, text, activeLink, handleNavClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (activeLink === to) {
      window.location.reload(); // Refresh the page if already on the same route
    } else {
      navigate(to); // Navigate using React Router
      handleNavClick(to);
    }
  };

  return (
    <Nav.Item className="nav-item">
      <Nav.Link onClick={handleClick} className={activeLink === to ? 'nav-link active' : 'nav-link'}>
        {text}
      </Nav.Link>
    </Nav.Item>
  );
}
