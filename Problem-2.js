function generateOddSeries(a) {
  let series = [];
  for (let i = 1; i <= a; i++) {
    series.push(2 * i - 1);
  }
  return series.join(", ");
}

console.log(generateOddSeries(1));
console.log(generateOddSeries(2));
console.log(generateOddSeries(3));
console.log(generateOddSeries(4));
console.log(generateOddSeries(5));
