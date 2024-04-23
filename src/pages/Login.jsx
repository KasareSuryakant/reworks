import React from 'react'
import Header from '../components/Header'
import UnderConstructionPage from '../components/UnderConstructionPage'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <>
    <Header/>
    <UnderConstructionPage/>
    <div className="text-center mt-4">
        <Link to="/" className="btn btn-primary">Go to Home Page</Link>
      </div>
    </>
  )
}
