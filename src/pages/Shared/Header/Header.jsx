import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <Container className='mb-5'>
            <div className='text-center my-3'>
                <img src={logo} alt="" />
                <h6 className='text-secondary mt-3'>Journalism Without Fear or Favour</h6>
                <h4 className='text-lg mt-3 mb-5'>{moment().format("dddd")}<span className='text-secondary'>{moment().format(", MMMM D, YYYY")}</span></h4>
            </div>
            <div className='d-flex gap-2'>
                <Button variant="danger">Latest</Button>
                <Marquee speed={100}>
                    I can be a React component, multiple React components, or just some text.I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <div>
                <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                    <Container className='align-items-center'>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/">All news</Nav.Link>
                                <Nav.Link as={Link} to="/career">Career</Nav.Link>
                            </Nav>
                            <Nav className='align-items-lg-center'>
                                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                                <Nav.Link eventKey={2} as={Link} to="/login">
                                    <Button variant="dark">Login</Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </Container>
    );
};

export default Header;