import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { Data } from '../data/data.js';
//import { findAllByTitle } from '@testing-library/react';

function QuizContainer(){

  const [count, setCount] = useState(Data[0].questions);
  console.log(count);

  const allAnswers = count[0].incorrectAnswers.push(count[0].correctAnswer);
  console.log(count[0].incorrectAnswers)
  console.log(count[0].correctAnswer)
  console.log(allAnswers);
  
  return (
      <div>
          <h1>Quiz Container Here</h1>
          <p> {count[0].text} </p>
          <div>{count[0].correctAnswer} </div>
          <div></div>
          <div></div>
          <div></div>
      </div>
  )
};

export default QuizContainer;