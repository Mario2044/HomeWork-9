let arr = [];
var table = 7;
var count = 10;
let arrr = (1,2,3,4,5,6,7,8,9,10,11,12,13,14,15);
let summ = 0;

for(let i = 10; i <= 20; i++) {
    arr.push(i);
}
console.log(arr.join(', '));

for(let i in arr) {
    arr[i] = arr[i] ** 2;
}
console.log(arr.join(', '));

for (var i = 0; i < count; i++) {
    i++;
    sum = table * i;
    console.log(`${table} * ${i} = ${sum}`);
    --i;
}

for (let i = 1; i <= arrr; i++) {
    summ += i;
}

console.log('The sum of natural numbers:', summ);