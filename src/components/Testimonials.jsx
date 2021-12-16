import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import { AiFillStar } from "react-icons/ai";
import { BsArrowRightSquare } from "react-icons/bs";
import { BsArrowLeftSquare } from "react-icons/bs";

var Data = [
  {
    img: "/images/test1.jpg",
    name: "Robert Johanson",
    title: "Best Developers",
    job: "Director at Behance",
  },
  {
    img: "/images/test2.jpg",
    name: "Robert Johanson",
    title: "Amazing After Service",
    job: "Business woman",
  },
  {
    img: "/images/test3.jpg",
    name: "Robert Johanson",
    title: "Extreme performance",
    job: "CEO at Localizer",
  },
];

const Testimonials = () => {
  const [no, setNo] = useState(0);
  const [personData, setPersonData] = useState(Data[no]);

  useEffect(() => {
    setPersonData(Data[no]);
  }, [no]);

  useEffect(() => {
    console.log("timeout");
    setInterval(() => increaseNo(), 5000);
  }, []);

  const increaseNo = () => {
    setNo((prev) => (prev + 1) % Data.length);
  };
  const decreaseNo = () => {
    setNo((prev) => prev - 1);
    setPersonData(Data[no]);
  };
  return (
    <div className='test-container' id='test'>
      <h1 class='test-text'>Clients</h1>
      <p className='test-describtion'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nihil
        sit ipsa earum, aliquam reprehenderit?
      </p>
      <div className='people-container'>
        <div className='ppl-img'>
          <img
            className='people-img-img'
            src={personData.img}
            alt='client smiling'
          />
        </div>
        <div className='ppl-text'>
          <h3 className='ppl-title'>{personData.title}</h3>
          <p className='ppl-describtion'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            consequuntur maiores iste aliquid modi quibusdam consectetur soluta
            cumque illo fugit.
          </p>
          <span class='icon-container'>
            {Array.apply(null, Array(5)).map((el) => (
              <AiFillStar className='star-icon' />
            ))}
          </span>
          <p className='ppl-name'>{personData.name}</p>
          <p className='ppl-job'>{personData.job}</p>
        </div>
      </div>
      <div className='arrow-container'>
        <BsArrowLeftSquare
          className='test-arrow'
          onClick={() => decreaseNo()}
        />
        <BsArrowRightSquare
          className='test-arrow'
          onClick={() => increaseNo()}
        />
      </div>
    </div>
  );
};

export default Testimonials;
