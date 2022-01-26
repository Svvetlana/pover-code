// function add(a) {
//     return function (b) {
//         return a + b;
//     }
// }
// console.log(add(1)(2));

// const a = add(1);

// console.log(a(2));


// for (var i = 0; i < 10; i++) {
//     setTimeout(() => console.log(i),0);
// }

// for (let i = 0; i < 10; i++) {
//     setTimeout(() => console.log(i),0);
// }



// function customPow(x, n){
//     if (n > 1) {
//         return x * customPow(x, n - 1)
//     }
//     return x
// }

// console.log(customPow(2, 4));
// console.log(2 ** 4);

// const testSet = [
//     {x : 2, n : 5},
//     {x : 1, n : 4},
//     {x : 7, n : 1},
//     {x : 8, n : 3},
// ];
// testSet.forEach(({x, n}) => {
//     console.log(customPow(x, n));
//     console.log(x ** n);
// })


//
function generationButtons(rootItem) {
    for (let i = 0; i < 10; i++) {
        const btn = document.createElement("button");

        btn.innerHTML = i;
        btn.onclick = () => console.log(i);
        rootItem.appendChild(btn);
    }
}
generationButtons(document.querySelector(".keyboard"));