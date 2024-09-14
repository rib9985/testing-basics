export default function analyzeArray(array) {
  const finalArray = array.filter((item) => typeof item === "number");

  const object = {
    average:
      finalArray.reduce((previous, current) => previous + current, 0) /
      finalArray.length,
    min: Math.min(...finalArray),
    max: Math.max(...finalArray),
    length: finalArray.length,
  };

  return object;
}
