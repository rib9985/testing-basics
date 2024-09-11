import capitalize from "../index/capitalize";

test("lowercase words are changed", () => {
  expect(capitalize("monster")).toBe("Monster");
});

test("capitalizes first letter, even if punctuation occurs", () => {
  expect(capitalize("...12nice")).toBe("...12Nice");
});

test("capital words remain the same", () => {
  expect(capitalize("String")).toBe("String");
});

test("capitalizes first word, maintains formatting", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});
