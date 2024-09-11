import Calculator from "../index/calculator";
const firstCalc = new Calculator(15, 3);
const secondCalc = new Calculator(-15, 3);
const thirdCalc = new Calculator(0, 0);

test("first calc, working positive integers", () => {
  expect(firstCalc).toEqual({
    leftOperand: 15,
    rightOperand: 3,
    sum: 18,
    subtraction: 12,
    product: 45,
    division: 5,
  });
});

test("second calc, working negative integers", () => {
  expect(secondCalc).toEqual({
    leftOperand: -15,
    rightOperand: 3,
    sum: -12,
    subtraction: -18,
    product: -45,
    division: -5,
  });
});

test("third calc, division is not a number", () => {
  expect(thirdCalc).toEqual({
    leftOperand: 0,
    rightOperand: 0,
    sum: 0,
    subtraction: 0,
    product: 0,
    division: NaN,
  });
});
