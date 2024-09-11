export default function capitalize(string) {
  const regex = /^[a-zA-Z]*$/;
  const stringLetters = string.split("");
  let firstLetterIndex = 0;
  for (let index = 0; index < stringLetters.length; index++) {
    const elementToCheck = stringLetters[index];
    if (regex.test(elementToCheck)) {
      firstLetterIndex = index;
      break;
    }
  }
  stringLetters[firstLetterIndex] =
    stringLetters[firstLetterIndex].toUpperCase();
  return stringLetters.join("");
}
