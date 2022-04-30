"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var name = (0, readline_sync_1.question)('What is your first name?: ');
    var lastName = (0, readline_sync_1.question)('What is your last name?: ');
    var age = (0, readline_sync_1.question)('How old are you?: ');
    if (name == '' || lastName == '' || age == null) {
        console.log('Please type again \n');
        main();
    }
    var howManyGrades = Number((0, readline_sync_1.question)('How many grades do you want to show?: '));
    var arrayGrades = [];
    while (howManyGrades > 0) {
        var grade = Number((0, readline_sync_1.question)('Type your grade: '));
        arrayGrades.push(grade);
        howManyGrades--;
    }
    function average(array) {
        var arraySum = 0;
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var num = array_1[_i];
            arraySum = arraySum + num;
        }
        var meanAverage = (arraySum / array.length);
        console.log("-----".concat(name, " ").concat(lastName, " grades -----"));
        console.log(parseFloat(meanAverage.toFixed(2)));
    }
    average(arrayGrades);
}
main();
