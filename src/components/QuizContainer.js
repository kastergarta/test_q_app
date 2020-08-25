import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../store/actions';

const qCounter = 0;

class QuizContainer extends React.Component {
  
  increment = () => {
    this.props.increment();
  }

  decrement = () => {
    this.props.decrement();
  }

  render(){

      console.log(this.props.answers); 
      const answersButtons = (array) => array.map(el => <button key={el.id} onClick={incrementQCounter}>{el}</button>)

      const incrementQCounter = () => {
        console.log('clicked')
        console.log(qCounter)
        //console.log(this.state.counter)
        return (
          qCounter + 1
        );
      }

    return (
    <div>
      <h2>Quiz</h2>
      <div>
        <h3> {this.props.title}</h3>
        <div>{this.props.question}</div>
        <div>{ answersButtons(this.props.answers) }</div>
        {/* <button onClick={this.decrement}>-</button>
        <div className="count">{
          this.props.count
        }</div>
        <button onClick={this.increment}>+</button> */}
      </div>
    </div>
    )
  }
};

const mapStateToProps = state => {
  return {
      title: state.title,
      question: state.questions[qCounter].text,
      answers: state.questions[qCounter].answers
  };
};

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizContainer);