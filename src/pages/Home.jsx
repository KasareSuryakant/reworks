import React from 'react'
import AllProducts from '../components/AllProducts'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Content from '../components/Content'
import Benefit from '../components/Benefit'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
export default function Products() {
  return (
    <>
      <Header />
      <Hero />
      <Content />
      <Benefit />

      <AllProducts />
      <Testimonial />
      <Footer />
    </>
  )
}
