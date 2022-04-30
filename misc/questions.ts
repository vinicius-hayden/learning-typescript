import { question,  } from "readline-sync";

function main():void{
    const name: string = question('What is your first name?: ');
    const lastName: string = question('What is your last name?: ');
    const age: number = question('How old are you?: ');
   
    if (name == '' || lastName == '' || age == null){
        console.log('Please type again \n');
        main();
    }

    let howManyGrades: number = Number(question('How many grades do you want to show?: '));
    var arrayGrades:number[] = [];
    while(howManyGrades > 0){
        let grade: number = Number(question('Type your grade: '));
        arrayGrades.push(grade);
        howManyGrades--;
    }

    function average(array:number[]){
        let arraySum: number = 0;
        for(let num of array){
            arraySum = arraySum + num;
        }
        
        const meanAverage: number = (arraySum/array.length);
        console.log(`-----${name} ${lastName} grades -----`)
        console.log(parseFloat(meanAverage.toFixed(2)));
    }

    average(arrayGrades);

}

main();