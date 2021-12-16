import React from "react";
import BlankBtn from "./BlankBtn";
import Card from "./Card";
import "./Features.css";
const Features = () => {
  const cardData = [
    { name: "Work Load", to: "/" },
    { name: "Time Tracking", to: "/" },
    { name: "Collaborations", to: "/" },
  ];
  return (
    <div className='features-container' id='features'>
      <h1 class='featurs-text'>Our</h1>
      <span className='features-describtion'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
        necessitatibus doloremque alias!
      </span>
      <div className='features-card-container'>
        {cardData.map((item) => (
          <Card to='./' name={item.name} />
        ))}
      </div>
      <BlankBtn color='white' to='./'>
        Explore All
      </BlankBtn>
    </div>
  );
};

export default Features;
