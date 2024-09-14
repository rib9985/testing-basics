import analyzeArray from "../index/analyzeArray";

const object = analyzeArray([1, 2, 3, 4]);
const objectTwo = analyzeArray([]);
const objectThree = analyzeArray([-1, -2, -3, -4]);
const objectFour = analyzeArray([-1, -2, -3, -4, "helloworld"]);

test("An simple array", () => {
  expect(object).toEqual({ average: 2.5, min: 1, max: 4, length: 4 });
});

test("An empty array", () => {
  expect(objectTwo).toEqual({
    average: NaN,
    min: Infinity,
    max: -Infinity,
    length: 0,
  });
});

test("A negative array", () => {
  expect(objectThree).toEqual({ average: -2.5, min: -4, max: -1, length: 4 });
});

test("An array which has a string", () => {
  expect(objectFour).toEqual({ average: -2.5, min: -4, max: -1, length: 4 });
});
