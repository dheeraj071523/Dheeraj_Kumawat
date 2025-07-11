function generateSeries(a) {
  let effectiveLength = a % 2 === 1 ? a : a - 1;
  let series = [];
  for (let i = 1; i <= effectiveLength; i++) {
    series.push(2 * i - 1);
  }
  return series.join(", ");
}

console.log(generateSeries(1));
console.log(generateSeries(2));
console.log(generateSeries(3));
console.log(generateSeries(4));
console.log(generateSeries(5));
console.log(generateSeries(6));
