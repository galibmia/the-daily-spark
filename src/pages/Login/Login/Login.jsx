import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const { logInWithEmailPassword } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    console.log(location)
    const from = location.state?.from?.pathname || "/";
    console.log(from)

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logInWithEmailPassword(email, password)
            .then(res => {
                const loggedUser = res.user;
                navigate(from);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    return (
        <Container className='w-25 mx-auto mt-5 border p-5 shadow-lg rounded'>
            <h3 className='text-center mb-3'>Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Text>New here? <Link to={'/register'} className='text-decoration-none'>Create an account</Link></Form.Text>
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button
                        type='submit'
                        variant="dark"
                        size="lg">
                        Login
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default Login;