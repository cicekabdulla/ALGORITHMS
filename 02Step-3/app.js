'use strict'
const numbers = [10, 8, -15, 3, 5, -9];

let sumEven = 0,
    multiplyEven = 1,
    count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        sumEven += numbers[i];
    }
    if (numbers[i] % 2 == 0) {
        multiplyEven *= numbers[i];
    }
    if (numbers[i] > 2) {
        count++;
    }
}

console.log('Müsbət ədədlərin cəmi:', sumEven, '\n',
    'Cüt ədədlərin hasili:', multiplyEven, '\n',
    '2-dən böyük olanların sayı:', count);
