import React from 'react';
import { Container, Alert } from 'react-bootstrap';

 const UnderConstructionPage = () => {
  return (
    <Container className="mt-5">
      <Alert variant="info" style={alertStyle}>
        <Alert.Heading style={headingStyle}>This page is under construction</Alert.Heading>
        <p style={paragraphStyle}>It will be live shortly. Please check back later!</p>
      </Alert>
    </Container>
  );
};

// Inline styles
const alertStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  textAlign: 'center',
  borderRadius: '10px',
};

const headingStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
};

const paragraphStyle = {
  fontSize: '18px',
};

export default UnderConstructionPage;
