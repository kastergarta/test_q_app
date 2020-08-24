import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { Data } from '../data/data.js';
//import { findAllByTitle } from '@testing-library/react';
import { connect } from 'react-redux';

function QuizContainer(){

  const [localstate, setLocalstate] = useState('');
  //console.log(allAnswers);
  
  return (
      <div>
          <h1>Quiz Container Here</h1>
          <div onClick={activateLasers}>CLICK!</div>
      </div>
  )
};

const mapStateToProps = state => {
  return {
      ctr: localstate.title
  };
};

const mapDispatchToProps = dispatch => {
  return {
    activateLasers: () => dispatch({type: 'LASERS'})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizContainer);