import React, { useState, useEffect, useContext } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import {jwtDecode} from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert

const AdList = () => {
    const [ads, setAds] = useState([]);
    const { isAuthenticated } = useContext(AuthContext);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/advertisements');
                setAds(res.data);
            } catch (err) {
                console.error(err.response.data);
            }
        };
        fetchAds();
    }, []);

    const handleDelete = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`http://localhost:5000/api/advertisements/${id}`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    setAds(ads.filter(ad => ad._id !== id));
                    Swal.fire(
                        'Deleted!',
                        'Your advertisement has been deleted.',
                        'success'
                    );
                } catch (err) {
                    console.error(err.response.data);
                    Swal.fire(
                        'Error!',
                        'There was an error deleting your advertisement.',
                        'error'
                    );
                }
            }
        });
    };

    const handleEdit = (id) => {
        navigate(`/edit-ad/${id}`);
    };

    return (
        <Container>
            <h2>Advertisements</h2>
            <Row>
                {ads.map(ad => (
                    <Col key={ad._id} sm={12} md={6} lg={4} xl={3}>
                        <Card className="my-3 p-3 rounded">
                            <Card.Body>
                                <Card.Title>{ad.title}</Card.Title>
                                <Card.Text>{ad.description}</Card.Text>
                                <Card.Text>
                                    <strong>Category: </strong>{ad.category}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Posted by: </strong>{ad.user.name}
                                </Card.Text>
                                {isAuthenticated && ad.user._id === jwtDecode(token).user.id && (
                                    <>
                                        <Button variant="warning" onClick={() => handleEdit(ad._id)}>Edit</Button>
                                        <Button variant="danger" onClick={() => handleDelete(ad._id)}>Delete</Button>
                                    </>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default AdList;
