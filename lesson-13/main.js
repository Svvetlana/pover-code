// const array1 = [];
// const array2 = new Array();
// const array3 = new Array(10);
// console.log(array3);

const array = [1, 2, 3, 4, 5];

delete array[3];
console.log(array);//[1, 2, 3, empty, 5]


// console.log(array[-1]);//undefined
// console.log(array[2]);//3
// console.log(array[9]);//undefined


// array[0] = -1;
// console.log(array);//[-1, 2, 3, 4, 5]
// array[20] = -100;
// console.log(array);//[-1, 2, 3, 4, 5, empty x 15, -100]



// array.unshift(0);
// array.unshift(1);
// console.log(array);//[1, 0, 1, 2, 3, 4, 5]


// console.log(array.shift());//1
// console.log(array);//[2, 3, 4, 5]


// array.push(0);
// array.push(-1);
// console.log(array);//[1, 2, 2, 3, 4, 5, 0, -1]


// console.log(array.pop());//5
// console.log(array);//[1, 2, 3, 4]


// console.log(array.splice(3, 1, -2, 3));//4
// console.log(array);//[1, 2, 3, -2, 3, 5]


// console.log(array.slice(1, 4));//[2, 3, 4]
// console.log(array);//[1, 2, 3, 4, 5]


// array.reverse()
// console.log(array);//[5, 4, 3, 2, 1]


// console.log(array.join);//[1, 2, 3, 4, 5]
// console.log(array.join("-"));//[1-2-3-4-5]


// array.sort((a, b) =>  b-a);
// console.log(array);//[5, 4, 3, 2, 1]


// console.log(array.filter(e => e % 2  === 0));//[2, 4]


// console.log(array.map(e => 2 * e));//[2, 4, 6, 8, 10]

//Перебор массива
// array.forEach((e, index, self) => {
//     console.log(e, index, self);//1 0 [1, 2, 3, 4, 5]
//                                 //2 1 [1, 2, 3, 4, 5]
//                                 //3 2 [1, 2, 3, 4, 5]
//                                 //4 3 [1, 2, 3, 4, 5]
//                                 //5 4 [1, 2, 3, 4, 5]

// })
