import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const {user, logOut, setError} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(err => {setError(err.message)})
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container className='align-items-center'>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to="/category/0">Home</Nav.Link>
                            <Nav.Link as={Link} to="/">All news</Nav.Link>
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                        </Nav>
                        <Nav className='align-items-lg-center'>
                            {user && <Nav.Link as={Link} to="/profile"><img style={{height: "40px", borderRadius: "50%"}} src={user.photoURL} alt="" /></Nav.Link>}
                            <Nav.Link eventKey={2} as={Link} to="/login">
                                {
                                    user ? <Button onClick={handleLogOut} variant="dark">Log Out</Button> :
                                        <Link to={'/login'}><Button variant="dark">Login</Button></Link>
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