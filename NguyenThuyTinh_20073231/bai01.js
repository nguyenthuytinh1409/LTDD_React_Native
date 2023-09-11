console.log('data 1');
var massMarks = 78;
var massJohn = 92;

var heightMarks = 1.69;
var heightJohn = 1.95;

var bmiMark = massMarks / heightMarks ** 2;
var bmiJohn = massJohn / heightJohn ** 2;

console.log('BMI Mark: ', bmiMark);
console.log('BMI John: ', bmiJohn);

{
    var markHigherBMI = function(bmiMark, bmiJohn) {
        if (bmiMark > bmiJohn)
            return true;
        return false;
    }
}
console.log('Mark cao hon John: ', markHigherBMI(bmiMark, bmiJohn));
console.log('data 2');
var massMarks1 = 95;
var massJohn1 = 85;

var heightMarks1 = 1.88;
var heightJohn1 = 1.76;

var bmiMark1 = massMarks1 / heightMarks1 ** 2;
var bmiJohn1 = massJohn1 / heightJohn1 ** 2;
console.log('BMI Mark: ', bmiMark1);
console.log('BMI John: ', bmiJohn1);
console.log('Mark cao hon John: ', markHigherBMI(bmiMark1, bmiJohn1));