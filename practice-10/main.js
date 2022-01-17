//Вид фигуры
const N = +prompt("Enter number", 0);

// if (N === 3) {
//     console.log('triangle');
// } else if (N === 4) {
//     console.log('rectangle');
// } else if (N > 4) {
//     console.log(`n ${N} polygon`);
// } else {
//     console.log("Do not know");
// }

switch (N) {
    case 3:
        console.log('triangle');
        break;
    case 4:
        console.log('rectangle');
        break;
    default:
        console.log(N > 4 ? `n ${N} polygon` : 'Do not know');
}

//Квадратное уравнение

const a = +prompt("Enter number a", 0);
const b = +prompt("Enter number b", 0);
const c = +prompt("Enter number c", 0);

const D = b ** 2 - 4 * a * c;

if (D < 0) {
    console.log('There is no decision!');
} else {
    console.log(`x1 = ${(-b - Math.sqrt(D)) / (2 * a)}`);
    console.log(`x1 = ${(-b + Math.sqrt(D)) / (2 * a)}`);
}

//Проверка на четность
const d = +prompt("Enter any number", 0);

console.log(d % 2 === 0 ? 'even number' : 'odd number');

//
let z = +prompt("Enter any number", 0);

const n100 = 100, n50 = 50, n20 = 20, n10 = 10;

const p100 = Math.floor(z / n100);

z -= p100 * n100;

const p50 = Math.floor(z / n50);

z -= p50 * n50;

const p20 = Math.floor(z / n20);

z -= p20 * n20;

const p10 = Math.floor(z / n10);

z -= p10 * n10;

console.log(`p100 = ${p100}, p50 = ${p50}, p20 = ${p20}, p10 = ${p10}, remainder = ${z}`);

//Угадай число

let num = (Math.random() * 10).toFixed(0);

// for (let i = 0; i < 10; i++) {
//     if (num === prompt('Enter number', -1)) {
//         alert('You win!');
//         break;
//     } else if (i === 9) {
//         alert(`Game over! ${num}`);
//     }
// }

while (true) {
    const g = prompt('Enter number', -1);
    if (g === null) {
        alert(`Game over! ${num}`);
        break;
    }
    if (num === g) {
        alert('You win!');
        break;
    }
}

//Вывести строку в произвольном порядке

const str = prompt('Enter any string', '');

let newString = '';

for (let i = 0; i < str.length; i++) {
    const symbol =
        Math.random() > 0.5 ? str[i].toLocaleLowerCase() : str[i].toLocaleUpperCase();
    newString += symbol;
}

console.log(newString);

//Выводить числа пока не нажмет "Отмена"
//Сумма всех чисел
//Среднее значение
//Максимальное значение
let j = 0;
let buffer = 0;
let max;

while (true) {
    const i = +prompt('Enter number, Enter "Отмена"', 0);
    if (i) {
        j++;
        buffer += i;

        if (typeof max === 'number') {
            max = i > max ? i : max;
        } else {
            max = i;
        }
    } else {
        break;
    }
}
console.log(`buffer = ${buffer}`);
console.log(`avg = ${buffer / j}`);
console.log(`max = ${max}`);

