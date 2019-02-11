import React from 'react';
import ReactDOM from 'react-dom';
import FstrzCalculatorComponent from './fstrz_calculator_component';

[].forEach.call(
  document.querySelectorAll('[data-wrapper=fstrz-calculator-component]'),
  function(container) {
    ReactDOM.render(
      <FstrzCalculatorComponent />,
      container);
  }
);
