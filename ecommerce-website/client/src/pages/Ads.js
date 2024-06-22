import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AdList from '../components/Advertisements/AdList';

const Ads = () => {
    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">Browse Advertisements</h2>
            <p className="text-center mb-5">Explore a wide range of advertisements posted by our users. Click on any advertisement to learn more or get in touch with the seller.</p>
            <AdList />
        </Container>
    );
};

export default Ads;
