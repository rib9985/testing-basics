export default class CaesarCipher {
  constructor(key, string) {
    this.string = string;
    this.key = key;
    this.finalCipherString = this.generateFinalCipher();
  }

  generateCipher() {
    const charArr = [...this.string.toLowerCase()];
    const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
    const changedArr = [];
    for (let index = 0; index < charArr.length; index++) {
      const currentChar = charArr[index];
      if (alphabetArr.includes(currentChar)) {
        let originalIndex = alphabetArr.indexOf(currentChar);
        let keyedIndex = (originalIndex + this.key) % 26;
        changedArr.push(alphabetArr[keyedIndex]);
      } else {
        changedArr.push(currentChar);
      }
    }
    return changedArr;
  }

  checkPositionCase() {
    const charArr = [...this.string];
    const upperBoolArr = charArr.map((item) => {
      return item === item.toUpperCase();
    });
    return upperBoolArr;
  }

  formatCipher() {
    const cipher = this.generateCipher();
    const upperBoolArr = this.checkPositionCase();
    const finalCipherArr = [];
    for (let index = 0; index < cipher.length; index++) {
      if (upperBoolArr[index]) {
        const formattedChar = cipher[index].toUpperCase();
        finalCipherArr.push(formattedChar);
      } else {
        finalCipherArr.push(cipher[index]);
      }
    }

    return finalCipherArr;
  }

  generateFinalCipher() {
    return this.formatCipher().join("");
  }
}
