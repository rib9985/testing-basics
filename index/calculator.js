export default class Calculator {
  constructor(leftOperand = 1, rightOperand = 1) {
    this.leftOperand = leftOperand;
    this.rightOperand = rightOperand;
    this.sum = this.sum();
    this.subtraction = this.subtract();
    this.product = this.multiply();
    this.division = this.divide();
  }

  sum() {
    return this.leftOperand + this.rightOperand;
  }

  subtract() {
    return this.leftOperand - this.rightOperand;
  }

  multiply() {
    return this.leftOperand * this.rightOperand;
  }

  divide() {
    if (this.rightOperand == 0) {
      return NaN;
    }
    return this.leftOperand / this.rightOperand;
  }
}
