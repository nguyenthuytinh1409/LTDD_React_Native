let a = [17, 21, 23]
let b = [12, 5, -5, 0, 4]
const printForecast = function (arr) {
  let c = ''
  for (let index = 0; index < arr.length; index++) {
    c += `${arr[index]}oC in ${[index + 1]}days ... `
  }
  return c
}
console.log(printForecast(a))
console.log(printForecast(b))
