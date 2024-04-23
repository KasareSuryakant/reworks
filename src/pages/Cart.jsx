import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import UnderConstructionPage from '../components/UnderConstructionPage';

export default function Cart() {
  return (
    <>
      <Header />
      <UnderConstructionPage />
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-primary">Go to Home Page</Link>
      </div>
    </>
  );
}
