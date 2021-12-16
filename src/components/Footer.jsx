import React from "react";
import BlankBtn from "./BlankBtn";
import "./Footer.css";

const Footer = () => {
  const list1 = ["links", "Overons", "Social Media", "Counters", "Contact"];
  const list2 = ["Company", "Terms & Conditions", "Privecy Policy", "Contact"];
  const list3 = [
    "Get in touch",
    "Facebook.com/goodguycozmo",
    "01557611570",
    "moh.ali.1593@gmail.com",
  ];
  return (
    <div className='footer-container' id='footer'>
      <span className='footer-title'>
        What are you waiting for? <br />
        Sign Up Now!
      </span>
      <BlankBtn to='/sign' color='black'>
        Sign Up
      </BlankBtn>
      <div className='footer-links-container'>
        <div className='links-row'>
          <span className='footer-logo'>H-Ware</span>
          <span className='footer-logo-details'>
            all rights reserved @Mohamed Ali
          </span>
        </div>
        <div className='links-row'>
          {list1.map((item) => (
            <div className='item'>{item}</div>
          ))}
        </div>
        <div className='links-row'>
          {list2.map((item) => (
            <div className='item'>{item}</div>
          ))}
        </div>
        <div className='links-row'>
          {list3.map((item) => (
            <div className='item'>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
