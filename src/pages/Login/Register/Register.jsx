import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const { signUpWithEmailPassword, setError, error, setUser, user, changeProfile } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleCreateUser = (event) => {
        event.preventDefault();
        setError('')
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photo.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            setError('Password not match')
            return
        }
        else if (password.length < 6) {
            setError('Password length must be greater than 6')
        }

        signUpWithEmailPassword(email, password)
            .then(result => {
                const createdUser = result.user;
                changeProfile(name, photoUrl)
                    .then(() => {
                    })
                    .catch(err => {
                        setError(err.message)
                    })
                    navigate('/')

            })
            .catch(err => {
                setError(err.message)
            })
    }

    return (
        <Container className='w-25 mx-auto mt-5 border rounded px-5 py-4'>
            <h3 className='text-center mb-3'>Sign Up</h3>
            <Form onSubmit={handleCreateUser}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImg">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter photo url" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name='confirmPassword' placeholder="Confirm Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Agree with terms and condition" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Text>Already have account? <Link to={'/login'} className='text-decoration-none'>Login Now</Link></Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                {
                    user && <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Text className='text-danger'>{user.email}</Form.Text>
                    </Form.Group>
                }
            </Form>
        </Container>
    );
};

export default Register;