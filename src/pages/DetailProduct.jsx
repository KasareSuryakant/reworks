import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import productsData from '../products.json';
import './DetailProduct.css';
import Header from '../components/Header';
import AllProducts from '../components/AllProducts';

function DetailProduct() {
  const { id: routeId } = useParams();
  const [id, setId] = useState('');
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');

  // Check if routeId has changed and update the id state accordingly
  useEffect(() => {
    setId(routeId);
  }, [routeId]);

  useEffect(() => {
    const matchedProduct = productsData.find(product => product.product_id === parseInt(id));
    if (matchedProduct) {
      setProduct(matchedProduct);
      // Check if the selected image has been set, if not, select the first image
      if (!selectedImage) {
        setSelectedImage(matchedProduct.Images[0]); // Select the first image by default
      }
    }

    // Scroll to the top only when the id parameter changes
    window.scrollTo(0, 0);
  }, [id]); // Only run the effect when id changes

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <Header />
      {product && (
        <Container className='productcontainer'>
          <div className="product-frame">
            <Row className="detail-product">
              <Col xs={12} lg={8} className="text-center image-col1">
                <div className="main-image-container">
                  <div className="zoom-effect">
                    <Image src={selectedImage} className="main-image" />
                  </div>
                </div>

                <Row className="image-options">
                  {product.Images.map((image, index) => (
                    <Col key={index} xs="auto" className="text-center">
                      <Image
                        src={image}
                        className={`thumbnail ${selectedImage === image ? 'selected' : ''}`}
                        onClick={() => handleImageClick(image)}
                        rounded
                      />
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col xs={12} lg={4} className="info">
                <h2>{product.Name}</h2>
                <p className="price">Price: {product.Prices}</p>
                <div className="product-tags">
                  <p className="product-tag"><strong>Category:</strong> {product.Category}</p>
                  <p className="product-tag"><strong>Developed By:</strong> {product.Tags['Developed By']}</p>
                </div>
                <div className="description">
                  <p>{product.Description}</p>
                </div>
                <Link to="/cart">
                  <Button variant="primary" className="add-to-cart">Add to Cart</Button>
                </Link>
              </Col>
            </Row>
          </div>
        </Container>
      )}

      <Container className="more-products">
        <hr />
        <h1 className="more-products">More Products</h1>
        <AllProducts />
      </Container>
    </>
  );
}

export default DetailProduct;
