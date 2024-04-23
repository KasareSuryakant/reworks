import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import testimonials from '../testimonials.json';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <section className="testimonial py-5">
      <Container>
        <h1 className="text-center mb-5">What Our "Pilots" Are Saying</h1>
        <Row xs={1} md={3} className="g-4">
          {testimonials.map((testimonial, index) => (
            <Col key={index}>
              <Card className={`testimonial-card ${index === 0 ? 'first-card' : ''} h-100 border-0 shadow`}>
                <Card.Body>
                  <Card.Text>{testimonial.testimonial}</Card.Text>
                  <div className="d-flex align-items-center mt-3">
                    <img src={testimonial.images} alt="User Testimonial" className="testimonial-image" />
                    <div className="ms-3">
                      <h5 className="mb-0">{testimonial.name}</h5>
                      <p className="text-muted mb-0">{testimonial.job}</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
