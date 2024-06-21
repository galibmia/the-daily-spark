import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const {user} = useContext(AuthContext);

    return (
        <Container>
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
                            {user && <Nav.Link as={Link} to="/profile"><FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle></Nav.Link>}
                            <Nav.Link eventKey={2} as={Link} to="/login">
                                {
                                    user ? <Button variant="dark">Log Out</Button> :
                                        <Link to={'/'}><Button variant="dark">Login</Button></Link>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;