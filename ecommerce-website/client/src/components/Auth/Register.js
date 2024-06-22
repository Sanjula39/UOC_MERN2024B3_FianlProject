import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaImage } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
            console.log('Response:', res); // Log the entire response
            if (res && res.data && res.data.token) {
                localStorage.setItem('token', res.data.token);
                navigate('/');
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
        <Container className="d-flex flex-column align-items-center">
            <BsPersonCircle size={100} className="mb-3" />
            <h2 className="text-center mb-4">Register</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit} className="w-50">
                <Form.Group controlId="formBasicName">
                    <Form.Label><FaUser /> Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label><FaEnvelope /> Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label><FaLock /> Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3 w-100">
                    Register
                </Button>
            </Form>
        </Container>
    );
};

export default Register;
