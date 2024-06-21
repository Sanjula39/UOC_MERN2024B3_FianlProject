import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Use useNavigate instead of history

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
            console.log('Response:', res); // Log the entire response
            if (res && res.data && res.data.token) {
                localStorage.setItem('token', res.data.token);
                navigate('/'); // Use navigate instead of history.push
            } else {
                setError('Registration failed. Please try again.');
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
            <h2>Register</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </Container>
    );
};

export default Register;
