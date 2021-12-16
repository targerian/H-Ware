import React from "react";
import "./QuestionCard.css";
import { AiOutlinePlus } from "react-icons/ai";
import { BsDashLg } from "react-icons/bs";

const QuestionCard = ({ name, toggled, handleChange }) => {
  console.log(toggled);
  return (
    <div className='question-card-container' onClick={handleChange}>
      {!toggled ? (
        <AiOutlinePlus className='question-card add' />
      ) : (
        <BsDashLg className='question-card minus' />
      )}
      <div className='quesion-info'>
        <span className='question-title'>{name}</span>

        <span className={`quesion-answer ${toggled ? "showen" : ""}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          accusamus possimus vitae ad cum laboriosam.
        </span>
      </div>
    </div>
  );
};

export default QuestionCard;
