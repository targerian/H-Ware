import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import useOnScreen from "../hooks/useOnScreen";
import "./Card.css";

import VisibilitySensor from "react-visibility-sensor";

const Card = ({ name, to }) => {
  const [isVisible, setIsVisible] = useState(false);
  // const ref = useRef();
  // const isVisible = useOnScreen(ref);
  // console.log(isVisible);
  function onChange(isVisible) {
    console.log("fireed");
    console.log("Element is now %s", isVisible ? "visible" : "hidden");
    setIsVisible(isVisible);
  }
  return (
    <VisibilitySensor onChange={onChange} partialVisibility={true}>
      <div
        className={`card-container ${isVisible ? "card-container-viewed" : ""}`}
        // ref={ref}
        // className='card-container'
      >
        <h2 className='card-header'>{name}</h2>
        <span className='card-info'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum libero ex
          ducimus asperiores officia alias fuga quidem minus aperiam soluta?
        </span>
        <div className='card-link'>
          <Link to={to}>Learn more</Link>
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default Card;
