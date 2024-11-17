import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Styles/Home.css';
import image1 from '../images/1.png';
import image2 from '../images/2.png';
import image3 from '../images/3.png';
function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <h1 className="header-title">Welcome to Career-Canvas</h1>
      </header>
      <div className="content-container">
        <div className="content-left">
          <h2 className="content-title">Create a Professional Resume in Minutes</h2>
          <p className="content-text">
            Our platform helps you create a professional resume effortlessly. Customize your
            resume with our easy-to-use tools and templates.
          </p>
          <p className="content-text">
            Check your ATS score and analyze your resume with our inbuilt Gemini AI tool to ensure
            it meets industry standards.
          </p>
          <Link to="/dashboard">
            <button className="c-button">
              <span className="c-main">
                <span className="c-ico"><span className="c-blur"></span> <span className="ico-text">+</span></span>
                Get Started
              </span>
            </button>
          </Link>
        </div>
        <div className="content-right">
          <Carousel autoPlay infiniteLoop showThumbs={false}>
            <div>
              <img src={image1} alt="Resume Example 1" />
            </div>
            <div>
              <img src={image2} alt="Resume Example 2" />
            </div>
            <div>
              <img src={image3} alt="Resume Example 3" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Home;
