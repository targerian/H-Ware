import React from "react";
import "./Services.css";
import { ReactComponent as Services1 } from "../svgs/service 1.svg";
import { ReactComponent as Services2 } from "../svgs/service 2.svg";
import { ReactComponent as Services3 } from "../svgs/service 3.svg";
import { ReactComponent as Services4 } from "../svgs/service 4.svg";
import BlankBtn from "./BlankBtn";

const Services = () => {
  return (
    <div className='services-container' id='services'>
      <p className='services-title'>Best</p>
      <div className='services-card-container'>
        {/* <Services4 sytle={{ backgroundColor: "red" }} /> */}
        <div className='top-left'>
          <img class='services-img' src='/images/coding.jpg' alt='coding ide' />
          <p className='card-title'>
            Web <br />
            Development
          </p>
          <span className='card-stars'>⭐⭐⭐⭐⭐</span>
        </div>
        <div className='top-right'>
          <img
            class='services-img'
            src='/images/web-design.jpg'
            alt='a man designing a website'
          />
          <p className='card-title'>
            Web <br /> Designing
          </p>
          <span className='card-stars'>⭐⭐⭐⭐⭐</span>
        </div>
        <div className='bottom-left'>
          <img class='services-img' src='/images/database.jpg' alt='database' />
          <p className='card-title'>
            Database <br /> Managment
          </p>
          <span className='card-stars'>⭐⭐⭐⭐⭐</span>
        </div>
        <div className='bottom-right'>
          <img class='services-img' src='/images/seo.jpg' alt='seo' />
          <p className='card-title'>SEO</p>
          <span className='card-stars'>⭐⭐⭐⭐⭐</span>
        </div>

        {/* <Services3 />
        <Services2 />
        <Services1 /> */}
      </div>
      <BlankBtn to='./' color='white'>
        Explore all
      </BlankBtn>
    </div>
  );
};

export default Services;
