const mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  height: 1.69,
  mass: 78,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2
  }
}
const john = {
  firstName: 'John',
  lastName: 'Smith',
  height: 1.95,
  mass: 92,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2
  }
}
mark.calcBMI()
john.calcBMI()
if (mark.bmi > john.bmi) {
  console.log(
    `${mark.firstName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${
      john.firstName
    }'s BMI (${john.bmi.toFixed(1)})`
  )
} else if (john.bmi > mark.bmi) {
  console.log(
    `${mark.firstName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${
      mark.firstName
    }'s BMI (${john.bmi.toFixed(1)})`
  )
}
