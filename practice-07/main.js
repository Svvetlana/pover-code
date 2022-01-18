console.group(`type`);

console.log(typeof null);//object
console.log(typeof undefined);//undefined
console.log(typeof "");//string
console.log(typeof 1);//number
console.log(typeof NaN);//number
console.log(typeof Infinity);//number
console.log(typeof -Infinity);//number
console.log(typeof "1");//string
console.log(typeof true);//boolean
console.log(typeof false);//boolean
console.log(typeof {});//object
console.log(typeof "{}");//string
console.log(typeof "[]");//string
console.log(typeof []);//object
console.groupEnd();

console.group(`type and values`);

console.log(typeof (123 + null) , 123 + null);//number 123
console.log(typeof ("" + undefined) , "" + undefined);//string undefined
console.log(typeof ({} + "") , {} + "");//string [object Object]
console.log(typeof (123 - NaN) , 123 - NaN);//number NaN
console.log(typeof (Infinity + true) , Infinity + true);//number Infinity
console.log(typeof (false - Infinity) , false - Infinity);//number -Infinity
console.log(typeof (false + "1") , false + "1");//string false1
console.log(typeof (true + 1) , true + 1);//number 2
console.log(typeof ("" + {} + false) , "" + {} + false);//string [object Object]false
console.log(typeof (123 + "[]") , 123 + "[]");//string 123[]
console.groupEnd();

console.group(`calculations`);

let x = prompt("Enter number", 0);
let y = prompt("Enter number", 0);
let z = prompt("Enter number", 0);

console.log(x +y + z);// string

//summa
let a = parseFloat(prompt("Enter number", 0));
let b = parseFloat(prompt("Enter number", 0));
let c = parseFloat(prompt("Enter number", 0));

console.log(a + b + c);// summa number
console.log((a + b + c)/3);//arithmetic mean
console.log('' + a + b + c);//string
console.log(Math.max(a, b, c));//max number
console.log(Math.min(a, b, c));//min number
console.groupEnd();

console.group(`replacement`);

let d = 10;
let e = 12;
// e = 10, d =12
/*// let f = d;
// d = e;
// e = f;*/

d = d + e;//22 = 10 + 12
e = d - e;//10 = 22 - 12
d = d - e;//12 = 22 - 10

console.log(d, e);
console.groupEnd();

console.group(`task`);

const str = prompt ("Enter any string", "");

console.log(str.toUpperCase());//все символы в верхнем регистре
console.log(str.substr(0, 1).toUpperCase() + str.substr(1).toLocaleLowerCase());//только первый символ в верхнем регистре
console.log(str.substr(0, str.length - 1).toLocaleLowerCase() + str.substr(-1).toUpperCase());//только последний символ в верхнем регистре
console.log(str.length);//длина строки
console.log(str.substr(0, str.length / 2));//половина строки
console.groupEnd();