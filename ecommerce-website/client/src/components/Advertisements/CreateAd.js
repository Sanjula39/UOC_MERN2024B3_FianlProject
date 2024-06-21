import React, { useState, useContext } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const CreateAd = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        const token = localStorage.getItem('token');
        if (!token) {
            setError('You must be logged in to create an advertisement');
            return;
        }
        try {
            const res = await axios.post('http://localhost:5000/api/advertisements', { title, description, category }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log('Response:', res); // Log the entire response
            if (res && res.data) {
                navigate('/ads');
            } else {
                setError('Advertisement creation failed. Please try again.');
            }
        } catch (err) {
            console.error('Error:', err); // Log the entire error
            const errorMsg = err.response && err.response.data && err.response.data.msg 
                ? err.response.data.msg 
                : 'An error occurred. Please try again.';
            setError(errorMsg);
        }
    };

    if (!isAuthenticated) {
        navigate('/login');
        return null;
    }

    return (
        <Container>
            <h2>Create Advertisement</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" placeholder="Enter category" value={category} onChange={(e) => setCategory(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create
                </Button>
            </Form>
        </Container>
    );
};

export default CreateAd;
