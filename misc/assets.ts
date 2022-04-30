console.log('Hello, World!');
var data1: number = 1;
var data2: string = 'string';
var data3: boolean = true;

function sum(num1: number, num2: number){
    return num1 + num2;
}

function helloName(firstName: string, lastName: string){
    console.log(`Hello, ${firstName} ${lastName}`)

}

function helloWorld(): void{
    console.log('Hello!')
}

function userData(id_number: number, username: string, age: number, online: boolean){
    this.id_number = id_number;
    this.username = username;
    this.age = age;
    this.online = online;
}

const user1 = new userData(9, 'Vinicius Hayden', 17, false);
console.log(user1);

const array = [0,1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i < array.length; i++){
    if(array[i]>5){
        console.log(array[i]);
    }
}

