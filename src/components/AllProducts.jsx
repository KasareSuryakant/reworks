import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { Col, Container, Row, Button } from 'react-bootstrap';
import './AllProducts.css'; // Import the CSS file

import productsData from '../products.json';
export default function AllProducts() {
  const [sortBy, setSortBy] = useState('name');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [product] = useState(productsData);
  

  useEffect(() => {
    // Reset all values to default when the component mounts
    setSortBy('name');
    setCategoryFilter('all');
    setSearchQuery('');
  }, []);


  const handleReset = () => {
    // Reset all values to default
    setSortBy('name');
    setCategoryFilter('all');
    setSearchQuery('');
  };

  const filteredProducts = product.filter((product) => {
    return (
      (categoryFilter === 'all' || product.Category.toLowerCase() === categoryFilter.toLowerCase()) &&
      product.Name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortBy === 'price') {
      return parseFloat(a.Prices) - parseFloat(b.Prices);
    } else {
      return a.Name.localeCompare(b.Name);
    }
  });

  return (
    <Container className="my-5">
      <div className="filter-section">
        <div className="filter-option">
          <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="form-select custom-select">
            <option value="all">All Categories</option>
            {product.map((product, index) => (
              <option key={index} value={product.Category.toLowerCase()}>{product.Category}</option>
            ))}
          </select>
        </div>
        <div className="filter-option">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="form-select custom-select">
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
          </select>
        </div>
        <div className="filter-option">
          <input
            type="text"
            placeholder="Search by product name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="filter-option">
          <Button onClick={handleReset} className="btn btn-secondary">Reset</Button>
        </div>
      </div>
      <Row xs={1} md={2} lg={3} className="g-4">
        {sortedProducts.map((product, index) => (
          <Col key={index} className="mb-4 link-grow">
            <Link as={Link} to={`/products/${product.product_id}`} className=" product-link">
              <div className="product card h-100">
                <img src={product.Images[0]} className="card-img-top" alt={product.Name} />
                <div className="card-body">
                  <h5 className="card-title">{product.Name}</h5>
                  <p className="card-text">Price: ${product.Prices}</p>
                  <p className="card-text">Category: {product.Category}</p>
                  <p className="card-text">Developed By: {product.Tags['Developed By']}</p>
                  <Button  variant="primary">Open Product</Button>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
