bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
tips = []
totals = []
for (let index = 0; index < bills.length; index++) {
  let tip = calcTip(bills[index])
  tips.push(tip)
  totals.push(tip + bills[index])
}
console.log(bills, tips, totals)
const calcAverage = function (arr) {
  let sum = 0
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index]
  }
  return sum / arr.length
}
console.log(`TotalAverage: ${calcAverage(totals)}`)
