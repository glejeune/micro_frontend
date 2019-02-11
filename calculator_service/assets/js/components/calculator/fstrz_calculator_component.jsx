import React, { Component } from 'react';

class FstrzCalculatorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operators: [
        { value: "+", fun: (a, b) => a + b },
        { value: "-", fun: (a, b) => a - b },
        { value: "*", fun: (a, b) => a * b },
        { value: "/", fun: (a, b) => a / b }
      ],
      buttonText: "?"
    };
  }

  nextOperator() {
    const next = this.state.operators.shift();
    this.state.operators.push(next);
    window.RealTime && window.RealTime.send("operatorChange", next);
  }

  componentDidMount() {
    if (window.RealTime) {
      this.operatorChange = window.RealTime.subscribe(
        "operatorChange",
        (e) => {
          this.setState({ buttonText: e.value });
        }
      );
    }
    this.nextOperator();
  }

  componentWillUnmount() {
    window.RealTime && this.operatorChange && window.RealTime.unsubscribe(this.operatorChange);
  }

  render() {
    return (
      <button onClick={this.nextOperator.bind(this)}>{ this.state.buttonText }</button>
    );
  }
}

export default FstrzCalculatorComponent;
