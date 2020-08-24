import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../store/actions';

class QuizContainer extends React.Component {
  
  state = {
    counter: 0
  }

  increment = () => {
    this.props.increment();
  }

  decrement = () => {
    this.props.decrement();
  }

  render(){
    return (
      <div className="counter">
      <h2>Counter</h2>
      <div>
        <button onClick={this.decrement}>-</button>
        <div className="count">{
          this.props.count
        }</div>
        <button onClick={this.increment}>+</button>
      </div>
    </div>
    )
  }
};

const mapStateToProps = state => {
  return {
      count: state.count
  };
};

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizContainer);