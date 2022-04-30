console.log('Hello, World!');
var data1 = 1;
var data2 = 'string';
var data3 = true;
function sum(num1, num2) {
    return num1 + num2;
}
function helloName(firstName, lastName) {
    console.log("Hello, ".concat(firstName, " ").concat(lastName));
}
function helloWorld() {
    console.log('Hello!');
}
function userData(id_number, username, age, online) {
    this.id_number = id_number;
    this.username = username;
    this.age = age;
    this.online = online;
}
var user1 = new userData(9, 'Vinicius Hayden', 17, false);
console.log(user1);
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < array.length; i++) {
    if (array[i] > 5) {
        console.log(array[i]);
    }
}
