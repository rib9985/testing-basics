import CaesarCipher from "../index/caesarCipher";

const abc = new CaesarCipher(3, "abc");
const abcUpper = new CaesarCipher(3, "AbC");
const abcCommas = new CaesarCipher(3, "A,b,C!");
const xyz = new CaesarCipher(10, " xyz , XYZ ");
const completeSentence = new CaesarCipher(
  8,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
);

test("returns the correct cipher", () => {
  expect(abc.finalCipherString).toBe("def");
});

test("returns the correct cipher, with correct uppercase", () => {
  expect(abcUpper.finalCipherString).toBe("DeF");
});

test("maintains puncutation", () => {
  expect(abcCommas.finalCipherString).toBe("D,e,F!");
});

test("maintains puncutation and spacing, with longer keys", () => {
  expect(xyz.finalCipherString).toBe(" hij , HIJ ");
});

test("can cipher a complete sentence", () => {
  expect(completeSentence.finalCipherString).toBe(
    "Twzmu qxacu lwtwz aqb iumb, kwvamkbmbcz ilqxqakqvo mtqb.",
  );
});
