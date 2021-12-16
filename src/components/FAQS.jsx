import React, { useEffect, useState } from "react";
import "./FAQS.css";
import QuestionCard from "./QuestionCard";

const FAQS = () => {
  const [faqsData, setFaqsData] = useState([
    { name: "Question 1", toggled: false },
    { name: "Question 2", toggled: false },
    { name: "Question 3", toggled: false },
    { name: "Question 4", toggled: false },
  ]);

  useEffect(() => {
    console.log(faqsData);
  }, []);

  return (
    <div className='faqs-container' id='q&a'>
      <h1 className='faqs-text'>FAQS</h1>
      {faqsData.map((question, index) => {
        return (
          <QuestionCard
            key={index}
            name={question.name}
            toggled={question.toggled}
            handleChange={() => {
              const data = [...faqsData];
              data[index].toggled = !faqsData[index].toggled;
              console.log(data);
              setFaqsData(data);
            }}
          />
        );
      })}
    </div>
  );
};

export default FAQS;
