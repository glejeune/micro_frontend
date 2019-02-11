import { mount } from 'redom';
import FstrzResultComponent from './fstrz_result_component';

[].forEach.call(
  document.querySelectorAll('[data-wrapper=fstrz-result-component]'),
  function(container) {
    mount(container, new FstrzResultComponent());
  }
);
