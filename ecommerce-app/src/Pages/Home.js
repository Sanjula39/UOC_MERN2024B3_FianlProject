import React, { useState } from "react";
import { Container, Card, Button, Modal } from "react-bootstrap";
import './css/Home.css';

function Home() {
  const products = [
    {
      id: 1,
      name: "Gaming Setup",
      description: "Gaming Setup with One Year Warranty",
      price: "Rs. 100,000",
      image:
        "https://img.freepik.com/free-psd/computer-mockup_1310-706.jpg?t=st=1715534496~exp=1715538096~hmac=38ade7bdb963ef95b7913cb31a01846bf079146c417919fe19d72673b8e10fbc&w=740",
    },
    {
      id: 2,
      name: "Headphone",
      description: "Office Usable HeadSet",
      price: "Rs. 20,000",
      image:
        "https://img.freepik.com/free-photo/black-headphones-digital-device_53876-96805.jpg?t=st=1715534597~exp=1715538197~hmac=faa72a8bffdd9ea350e22617a1e6d9b9d72423a454a4462f7e3a3d29e500d3ee&w=740",
    },
    {
      id: 3,
      name: "Samsung Mobile",
      description: "Samsung Mobile Phone",
      price: "Rs. 50,000",
      image:
        "https://img.freepik.com/free-vector/smartphone-with-gradient-wallpaper_23-2147846500.jpg?t=st=1715534757~exp=1715538357~hmac=534398c40679da23069fa140a8b762a89dc149ac2e5018271ab68ddd11c169e9&w=740",
    },
    {
      id: 4,
      name: "Google Pixel",
      description: "Google Pixel Phone",
      price: "Rs. 80,000",
      image:
        "https://img.freepik.com/free-vector/realistic-smartphone-different-positions_23-2148322985.jpg?t=st=1715534917~exp=1715538517~hmac=7b04ae75345df178fd6afb37c8e3499750290770d0cb0728c144401d3d052db1&w=740",
    },
    {
      id: 5,
      name: "Cannon DSLR Camera",
      description: "Cannon DSLR Camera",
      price: "Rs. 60,000",
      image:
        "https://img.freepik.com/free-photo/camera-photographic-equipment-lens-technology-generative-ai_188544-19482.jpg?t=st=1715535926~exp=1715539526~hmac=f3edc3e7570d19f200a930f600aab91d9a381ed2df3d081b01dbc718c8c552eb&w=740",
    },
    {
      id: 6,
      name: "Sofa",
      description: "Comfortable Pillow Sofa",
      price: "Rs. 40,000",
      image:
        "https://img.freepik.com/free-photo/comfortable-pillow-sofa_74190-10005.jpg?t=st=1715536309~exp=1715539909~hmac=2997a9276313103c90528864b98ba35f459f2f4b93cef376da5ac8b14e7dd9ca&w=740",
    },
  ];
  const [showModal, setShowModal] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const handleImageClick = (image) => {
    setPreviewImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/shopping-cart-black-background-with-copy-space_23-2148317906.jpg?t=st=1715534134~exp=1715537734~hmac=041fa3629c235514ce2627503ed24d39fb8492d50de16093a09b60c417247eed&w=1500')`,
        backgroundSize: "cover",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Container>
        <h2 className="text-center text-white mb-4">
          Welcome to Quick Mart!
        </h2>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-lg-4 col-md-6 mb-4">
              <Card className="product-card">
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                  onClick={() => handleImageClick(product.image)}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>Price: {product.price}</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Body>
            <img src={previewImage} alt="Preview" style={{ width: "100%" }} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

export default Home;
