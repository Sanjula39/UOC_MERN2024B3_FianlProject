import React, { useState, useEffect, useContext } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaBullhorn, FaTags, FaPencilAlt, FaPhone } from 'react-icons/fa';

const EditAd = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    
    const [error, setError] = useState(null);
    const { isAuthenticated } = useContext(AuthContext);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchAd = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/advertisements/${id}`);
                const ad = res.data;
                setTitle(ad.title);
                setDescription(ad.description);
                setCategory(ad.category);
               
            } catch (err) {
                console.error(err.response ? err.response.data : err.message);
            }
        };
        fetchAd();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            await axios.put(`http://localhost:5000/api/advertisements/${id}`, { title, description, category }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            Swal.fire(
                'Updated!',
                'Your advertisement has been updated.',
                'success'
            );
            navigate('/ads');
        } catch (err) {
            console.error(err.response ? err.response.data : err.message);
            const errorMsg = err.response && err.response.data && err.response.data.msg 
                ? err.response.data.msg 
                : 'An error occurred. Please try again.';
            setError(errorMsg);
            Swal.fire(
                'Error!',
                'There was an error updating your advertisement.',
                'error'
            );
        }
    };

    if (!isAuthenticated) {
        navigate('/login');
        return null;
    }

    return (
        <Container>
            <h2 className="text-center my-4">Edit Advertisement</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label><FaBullhorn /> Title</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                </Form.Group>

                <Form.Group controlId="formBasicDescription">
                    <Form.Label><FaPencilAlt /> Description</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        placeholder="Enter description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                    />
                </Form.Group>

                <Form.Group controlId="formBasicCategory">
                    <Form.Label><FaTags /> Category</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter category" 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)} 
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                    Update
                </Button>
            </Form>
        </Container>
    );
};

export default EditAd;
