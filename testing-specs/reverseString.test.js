import reverseString from "../index/reverseString";

test("reverses one word, without punctuation", () => {
  expect(reverseString("foobar")).toBe("raboof");
});

test("reverses one word, with punctuation", () => {
  expect(reverseString("foo@bar.")).toBe(".rab@oof");
});

test("reverses two words, maintains spacing", () => {
  expect(reverseString("foo bar")).toBe("rab oof");
});

test("reverses punctuation and numbers", () => {
  expect(reverseString("12345,.?")).toBe("?.,54321");
});
