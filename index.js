let arr = [];
let table = 7;
let summ = 0;
let product = 1;
let j;
let num = [];
let sum = 0;
let sumEvenNumber = 0;
let naturalNum = 50;
let output = 0;
let sumNum = 0; 
let result = 'x ';

//Вивести на сторінку в один рядок через кому числа від 10 до 20.
for(let i = 10; i <= 20; i++) {
    arr.push(i);
}
console.log(arr.join(', '));

//Вивести квадрати чисел від 10 до 20.
for(let i in arr) {
    arr[i] = arr[i] ** 2;
}
console.log(arr.join(', '));

//Вивести таблицю множення на 7.
for (let i = 0; i < 10; i++) {
    i++;
    sum = table * i;
    console.log(`${table} * ${i} = ${sum}`);
    i--;
}

//Знайти суму всіх цілих чисел від 1 до 15.
for (let i = 1; i <= 15; i++) {
    summ += i;
}
console.log(`${summ}`);

//Знайти добуток усіх цілих чисел від 15 до 35.
for (j = 15; j <= 35; j++) 
   {
    product *= j;
}
console.log(`${product}`);

//Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
for (let i = 1; i <= 500; i++){
    num.push(i);
    sum += i;
}
sumElements = sum / num.length;
console.log(`${sumElements}`);

//Вивести суму лише парних чисел в діапазоні від 30 до 80.
for(let i = 30; i <= 80; i++){
    if(i % 2 == 0){
        sumEvenNumber = sumEvenNumber + i;
    }
}
console.log(`${sumEvenNumber}`);

//Вивести всі числа в діапазоні від 100 до 200 кратні 3.
for (let i = 100; i <= 200; i++){
    if(i % 3 === 0) {
        console.log(`${i}`);
    }
}

//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
for (i = 1; i <= naturalNum; i++) {
    if (naturalNum % i == 0) {
        console.log("Divisors: " + i + " "); 
    }
}

//Визначити кількість його парних дільників. 
for (let i = 1; i <= naturalNum; i++) 
    if (naturalNum % i === 0) {
    output += 1; 
}
console.log(`${output}`);

//Знайти суму його парних дільників.
for (let i = 1; i <= naturalNum; i++) {
    sumNum = naturalNum + i;
}
console.log(`${sumNum}`);

//Надрукувати повну таблицю множення від 1 до 10.
for (let i = 0; i <= 10; i++) {

    for (let f = 0; f <= 10; f++) {

        if(i == 0 && f > 0){
          result += '| ' + f + ' |';
        } 
        else if(f == 0 && i > 0){
          result += '|' + i + ' | ';
        } 
        else if(i > 0 && f > 0){
        result += (i * f) + '    ';
        }
    }
    result += '\n';
}
console.log(result);




