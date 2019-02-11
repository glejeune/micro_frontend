import { mount } from 'redom';
import FstrzValueComponent from './fstrz_value_component';

[].forEach.call(
  document.querySelectorAll('[data-wrapper=fstrz-value-component]'),
  function(container) {
    mount(container, new FstrzValueComponent());
  }
);
