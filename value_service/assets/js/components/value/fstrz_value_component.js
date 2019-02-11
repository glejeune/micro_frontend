import { el } from 'redom';

class FstrzValueComponent {
  constructor() {
    this.el = el('input', { type: "text", size: 4, value: 0});
    this.el.oninput = e => {
      e.preventDefault();
      this.handleEvent();
    };
  }

  handleEvent() {
    const value = parseFloat(this.el.value);

    window.RealTime && window.RealTime.send("valueChange", value);
  }

  onmount() {
  }

  onremount() {
  }

  onunmount() {
  }
}


export default FstrzValueComponent;
