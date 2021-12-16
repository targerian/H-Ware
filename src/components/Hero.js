import React from "react";
import Button from "./Button";
import "./Hero.css";

const Hero = () => {
  return (
    <div className='hero-container' id='hero'>
      <div className='hero-text'>
        <span className='header1'>
          Providing <br /> Best
        </span>
        <span className='header-describtion'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          aliquam quo.
        </span>
        <div className='header-btn-container'>
          <Button
            to='/'
            backgroundColor='#25A4AD'
            color='#FFF'
            width='200px'
            height='5vh'
          >
            Get Started
          </Button>
          <Button
            to='/'
            backgroundColor='#25A4AD'
            color='#FFF'
            width='200px'
            height='5vh'
            rightLeft={true}
          >
            Explore
          </Button>
        </div>
      </div>
      <div className='hero-img'>
        <img
          src='/images/girl.png'
          alt='girl laughing'
          className='header-img'
        />
      </div>
    </div>
  );
};

export default Hero;
