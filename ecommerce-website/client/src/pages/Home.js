import React from 'react';
import { Container, Carousel, Row, Col, Card } from 'react-bootstrap';
import { FaBullhorn, FaUserFriends, FaShoppingCart } from 'react-icons/fa';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';

const Home = () => {
    return (
        <Container className="p-5 mb-4 bg-light rounded-3">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-photo/cyber-monday-shopping-sales_23-2148688502.jpg?t=st=1719079059~exp=1719082659~hmac=73406292da8d8bcbbde0eb1e3d23677ac1a3f2918ec5f52c97c82c6d94ae462c&w=1380"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Buy and Sell with Ease</h3>
                        <p>Explore a variety of products and post your own advertisements effortlessly.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-photo/high-angle-clothes-bed-fast-fashion-concept_23-2149726122.jpg?t=st=1719079107~exp=1719082707~hmac=aac7d38c51e9fdef479bfba65ec00a81c355f0c997c79537df01433e71831eb7&w=1380"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Connect with Buyers and Sellers</h3>
                        <p>Engage with a community of users for seamless transactions.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-photo/medium-shot-smiley-woman-with-clothes_23-2149726076.jpg?t=st=1719079168~exp=1719082768~hmac=7f2554a7d1b72cd22659153a06bd6f46abb1c8b999925be7047ed42016228a46&w=1380"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Advertise Your Products</h3>
                        <p>Reach a larger audience by posting your advertisements.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="my-5">
                <h2 className="text-center mb-4">Our Services</h2>
                <Row>
                    <Col md={4}>
                        <Card className="text-center">
                            <Card.Body>
                                <FaBullhorn size={50} className="mb-3" />
                                <Card.Title>Advertise Easily</Card.Title>
                                <Card.Text>
                                    Post your advertisements quickly and easily to reach a wide audience.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-center">
                            <Card.Body>
                                <FaUserFriends size={50} className="mb-3" />
                                <Card.Title>Connect with Users</Card.Title>
                                <Card.Text>
                                    Engage with a community of buyers and sellers to make transactions smoother.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-center">
                            <Card.Body>
                                <FaShoppingCart size={50} className="mb-3" />
                                <Card.Title>Easy Transactions</Card.Title>
                                <Card.Text>
                                    Experience hassle-free transactions with our user-friendly platform.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Home;
