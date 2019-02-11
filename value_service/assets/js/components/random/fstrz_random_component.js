import { el } from 'redom';

class FstrzRandomComponent {
  constructor() {
    this.value = Math.floor((Math.random() * 100) + 1);
    this.el = el('span', this.value);
  }

  onmount() {
    window.RealTime && window.RealTime.send("randomValue", this.value);
  }

  onremount() {
  }

  onunmount() {
  }
}


export default FstrzRandomComponent;
