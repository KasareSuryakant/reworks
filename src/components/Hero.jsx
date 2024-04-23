import React from 'react';
import { Link } from 'react-router-dom';
import Discount from '../assets/images/Header/discount.svg';
import heroData from '../hero.json';
import './Hero.css'
export default function Hero() {
  const {
    discountTag,
    heading,
    paragraph,
    buttonText,
    buttonLink,
    heroImage
  } = heroData;

  return (
    <section className="hero">
      <div className="hero-description">
      <div  className="discount-tag">
          <img src={Discount} alt="Discount" />
          <p>{discountTag}</p>
        </div>
        <h1 className="hero-description-heading">
          {heading.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h1>
        <p className="hero-description-paragraph">{paragraph}</p>
        <div className="hero-description-button">
          <Link to={buttonLink}>{buttonText}</Link>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
      </div>
    </section>
  );
}
