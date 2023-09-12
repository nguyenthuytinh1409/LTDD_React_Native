let bills = [125, 55, 44]
let tips = []
let totals = []
let calcTip = function (bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2
}
for (let index = 0; index < bills.length; index++) {
  let tip = calcTip(bills[index])
  tips.push(tip)
  totals.push(tip + bills[index])
}
console.log(bills, tips, totals)
