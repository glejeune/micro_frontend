import { mount } from 'redom';
import FstrzRandomComponent from './fstrz_random_component';

[].forEach.call(
  document.querySelectorAll('[data-wrapper=fstrz-random-component]'),
  function(container) {
    mount(container, new FstrzRandomComponent());
  }
);
