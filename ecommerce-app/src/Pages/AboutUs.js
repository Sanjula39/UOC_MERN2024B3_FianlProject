import React from "react";
import { Container, Card } from "react-bootstrap";

function AboutUs() {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">About Us</h2>
      <Card>
        <Card.Body>
          <Card.Title>Our Story</Card.Title>
          <Card.Text>
            Once upon a time in a bustling city, there were three friends -
            Alice, Bob, and Claire - who shared a passion for creating something
            extraordinary. They dreamt of building a platform where people could
            discover unique products while supporting independent artisans from
            around the world. Their journey began in a small garage, where they
            spent countless late nights brainstorming ideas and sketching out
            plans. Fuelled by their shared vision and determination, they
            embarked on an adventure to turn their dream into reality. With
            dedication and perseverance, they overcame numerous challenges along
            the way. From sourcing sustainable materials to designing
            user-friendly interfaces, every step brought them closer to their
            goal. As their platform grew, so did their team. They welcomed
            talented individuals who shared their passion and commitment to
            making a positive impact on the world. Together, they fostered a
            culture of creativity, collaboration, and compassion. Today, their
            platform stands as a testament to their journey - a vibrant
            community where people come together to discover unique treasures,
            connect with artisans, and support sustainable practices. Alice,
            Bob, Claire, and their team continue to innovate and inspire, driven
            by their unwavering belief in the power of creativity and
            collaboration to create a better world. Join us on this journey as
            we celebrate craftsmanship, creativity, and community. Together, we
            can make a difference, one unique find at a time.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AboutUs;
