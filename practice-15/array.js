function newArray(len = 1500, min = 0, max = 1) {
    const array = [];
    for (let i = 0; i < len; i++) {
        array.push(Math.round((max - min) * Math.random() + min))
    }
    return array;
}
const someArray = newArray(1500, -100, 100);
// console.log(someArray);

// const avg = someArray.reduce((x, e) => {
//     return x + e;
// }, 0) / someArray.length;

// console.log(`avg = ${avg}`);

// let max;
// let min;

// for (let e of someArray) {
//     if (typeof max === 'number') {
//         max = max < e ? e : max;
//     } else {
//         max = e;
//     }
//     if (typeof min === 'number') {
//         min = min > e ? e : min;
//     } else {
//         min = e;
//     }
// }

// console.log(`max = ${max}`);
// console.log(`min = ${min}`);


// console.log(someArray.filter((e) => e % 2 === 0).sort());//четные, по возрастанию
// console.log(someArray.filter((e) => e > 0).sort());//положительные
// console.log(someArray.filter((e) => e % 5 === 0).sort());//кратные 5

//