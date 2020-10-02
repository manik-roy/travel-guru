import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

const Header = () => {
  const location = useLocation();
  return (
    <Container>
      <Navbar expand="lg" className="pt-4 text-primary">
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://i.ibb.co/FHBKmhh/travel-logo.png"
            width="150"
            height="80"
            className={`d-inline-block align-top ${location.pathname === '/' || location.pathname.includes("/booking/") ? 'logo' : ''}`}
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline className="m-auto navBarSearchForm pl-3">
            <FormControl type="text" placeholder="Search your Destination..." className={`mr-sm-2 ${location.pathname === '/' || location.pathname.includes("/booking/") ? 'search-input' : ''}`} />
          </Form>
          <Nav className={`ml-auto ${location.pathname === '/' || location.pathname.includes("/booking/") ? 'header-nav2' : 'header-nav'}`}>
            <Nav.Link as={Link} className="px-4" to="/news">News</Nav.Link>
            <Nav.Link as={Link} className="px-4" to="/news">News</Nav.Link>
            <Nav.Link as={Link} className="px-4" to="/destination">Destination</Nav.Link>
            <Nav.Link as={Link} className="px-4" to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} className="px-4" to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} className="px-4" to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;




