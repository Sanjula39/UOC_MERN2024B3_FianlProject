import React, { useState, useContext } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            console.log('Response:', res); // Log the entire response
            if (res && res.data && res.data.token) {
                login(res.data.token);
                navigate('/');
            } else {
                setError('Login failed. Please try again.');
            }
        } catch (err) {
            console.error('Error:', err); // Log the entire error
            const errorMsg = err.response && err.response.data && err.response.data.msg 
                ? err.response.data.msg 
                : 'An error occurred. Please try again.';
            setError(errorMsg);
        }
    };

    return (
        <Container>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    );
};

export default Login;
