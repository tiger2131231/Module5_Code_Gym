import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar expand="lg" className="navbar-fm">
            <Container>
                <Navbar.Brand as={Link} to="/home">Spotify lite</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Link to="/home" className="nav-link">Trang chủ</Link>
                        <Link to="/songs" className="nav-link">Bài hát</Link>
                        <Link to="/add" className="nav-link">Thêm bài hát</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
