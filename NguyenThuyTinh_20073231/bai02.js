// FullName: Nguyen Thuy Tinh
console.log('Data 1')
let heightMark = 1.69
let weightMark = 78
let BMIMark = weightMark / heightMark ** 2

let heightJohn = 1.95
let weightJohn = 92
let BMIJohn = weightJohn / heightJohn ** 2

markHigherBMI = BMIMark > BMIJohn
console.log(markHigherBMI)
/////////////////////////////
console.log('Data 2')
heightMark = 1.88
weightMark = 95
BMIMark = weightMark / heightMark ** 2

heightJohn = 1.76
weightJohn = 85
BMIJohn = weightJohn / heightJohn ** 2

markHigherBMI = BMIMark > BMIJohn
console.log(markHigherBMI)

///////////////////////////////////////
if (BMIMark > BMIJohn) {
  console.log(
    `Mark's BMI (${BMIMark.toFixed(
      1
    )}) is higher than John's BMI (${BMIJohn.toFixed(1)})`
  )
} else if (BMIJohn > BMIMark) {
  console.log(
    `John's BMI (${BMIJohn.toFixed(
      1
    )}) is higher than Mark's BMI (${BMIMark.toFixed(1)})`
  )
}
