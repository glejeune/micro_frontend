import { el } from 'redom';

class FstrzResultComponent {
  constructor() {
    this.el = el('span', '?');
    this.operation = () => '?';
    this.value = 0;
    this.random = 1;
  }

  update() {
    this.el.innerHTML = this.operation(this.random, this.value);
  }

  onmount() {
    if (window.RealTime) {
      this.operatorChange = window.RealTime.subscribe(
        "operatorChange",
        (e) => {
          this.operation = e.fun;
          this.update();
        }
      );

      this.valueChange = window.RealTime.subscribe(
        "valueChange",
        (e) => {
          this.value = e;
          this.update();
        }
      );

      this.randomValue = window.RealTime.subscribe(
        "randomValue",
        (e) => {
          this.random = e;
          this.update();
        }
      );
    }
  }

  onremount() {
  }

  onunmount() {
    this.operatorChange && window.RealTime.unsubscribe(this.operatorChange);
    this.valueChange && window.RealTime.unsubscribe(this.valueChange);
    this.randomValue && window.RealTime.unsubscribe(this.randomValue);
  }
}


export default FstrzResultComponent;
