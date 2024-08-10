/**
  * This class define a Counter object
 */
class Counter {
  public value: number;

  constructor(value: number) {
    this.value = value;
  }

  increment(): void {
    this.value++;
  }

  reset(): void {
    this.value = 0;
  }

  decrement(): void {
    this.value--;
  }
}

export default Counter;
