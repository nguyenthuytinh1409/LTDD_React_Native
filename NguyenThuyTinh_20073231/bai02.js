console.log('data 1');
var massMarks = 78;
var massJohn = 92;

var heightMarks = 1.69;
var heightJohn = 1.95;

var bmiMark = massMarks / heightMarks ** 2;
var bmiJohn = massJohn / heightJohn ** 2;

console.log('BMI Mark: ', bmiMark.toFixed(2));
console.log('BMI John: ', bmiJohn.toFixed(2));

var markHigherBMI = function(bmiMark, bmiJohn) {
    if (bmiMark > bmiJohn)
        return console.log("Mark's BMI(", bmiMark.toFixed(2), ") is higher than John's BMI(", bmiJohn.toFixed(2), ")");;
    return console.log("John's BMI(", bmiJohn.toFixed(2), ") is higher than Mark's BMI(", bmiMark.toFixed(2), ")");;
}
console.log(markHigherBMI(bmiMark, bmiJohn));
console.log('data 2');
var massMarks1 = 95;
var massJohn1 = 85;

var heightMarks1 = 1.88;
var heightJohn1 = 1.76;

var bmiMark1 = massMarks1 / heightMarks1 ** 2;
var bmiJohn1 = massJohn1 / heightJohn1 ** 2;
console.log('BMI Mark: ', bmiMark1.toFixed(2));
console.log('BMI John: ', bmiJohn1.toFixed(2));
console.log(markHigherBMI(bmiMark1, bmiJohn1));